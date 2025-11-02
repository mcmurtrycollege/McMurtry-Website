import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './StaggeredMenu.css';
import { navbar_headers } from './navbar.json';

export const StaggeredMenu = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const openRef = useRef(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);
  const iconRef = useRef(null);
  const toggleBtnRef = useRef(null);

  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const busyRef = useRef(false);
  const categoryAnimsRef = useRef({});

  // Transform navbar_headers into flat items structure
  const menuItems = [];
  navbar_headers.forEach((header) => {
    header.subheaders.forEach((subheader) => {
      menuItems.push({
        label: subheader.name,
        link: subheader.to,
        category: header.name
      });
    });
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const icon = iconRef.current;
      if (!panel || !icon) return;

      let preLayers = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      // Start with menu closed
      gsap.set([panel, ...preLayers], { xPercent: 100 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: '#fff' });
    });
    return () => ctx.revert();
  }, []);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const categoryEls = Array.from(panel.querySelectorAll('.sm-category-title'));

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    }
    if (categoryEls.length) {
      gsap.set(categoryEls, { opacity: 0, y: 20 });
    }

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (categoryEls.length) {
      const catStart = panelInsertTime + panelDuration * 0.1;
      tl.to(
        categoryEls,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: { each: 0.05, from: 'start' }
        },
        catStart
      );
    }

    if (itemEls.length) {
      const itemsStartRatio = 0.2;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: { each: 0.06, from: 'start' }
        },
        itemsStart
      );
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();
    closeTweenRef.current = gsap.to(all, {
      xPercent: 100,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        const categoryEls = Array.from(panel.querySelectorAll('.sm-category-title'));
        if (categoryEls.length) {
          gsap.set(categoryEls, { opacity: 0, y: 20 });
        }
        busyRef.current = false;
      }
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) {
      playOpen();
    } else {
      playClose();
    }
  }, [playOpen, playClose]);

  const toggleCategory = useCallback((category) => {
    const isExpanded = expandedCategories.includes(category);
    const categoryEl = document.querySelector(`[data-category="${category}"]`);
    
    if (!categoryEl) return;

    const itemEls = Array.from(categoryEl.querySelectorAll('.sm-panel-itemLabel'));
    
    // Kill any existing animation for this category
    if (categoryAnimsRef.current[category]) {
      categoryAnimsRef.current[category].kill();
    }

    if (isExpanded) {
      // Collapse animation
      categoryAnimsRef.current[category] = gsap.to(itemEls, {
        yPercent: -20,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        stagger: { each: 0.03, from: 'end' },
        onComplete: () => {
          setExpandedCategories(prev => prev.filter(c => c !== category));
          gsap.set(itemEls, { yPercent: 100, opacity: 0 });
        }
      });
    } else {
      // Expand animation
      setExpandedCategories(prev => [...prev, category]);
      gsap.set(itemEls, { yPercent: 100, opacity: 0 });
      
      // Delay slightly to allow DOM update
      setTimeout(() => {
        categoryAnimsRef.current[category] = gsap.to(itemEls, {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          stagger: { each: 0.05, from: 'start' }
        });
      }, 50);
    }
  }, [expandedCategories]);

  const handleItemClick = () => {
    // Close menu when item is clicked
    if (openRef.current) {
      toggleMenu();
    }
  };

  // Group items by category
  const groupedItems = {};
  menuItems.forEach(item => {
    if (!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
  });

  return (
    <div
      className="staggered-menu-wrapper"
      data-open={open || undefined}
    >
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        <div className="sm-prelayer" style={{ background: 'rgba(26, 22, 37, 0.7)' }} />
        <div className="sm-prelayer" style={{ background: 'rgba(16, 13, 23, 0.85)' }} />
      </div>
      <header className="staggered-menu-header" aria-label="Main navigation header">
        {/* Top section with logo */}
        <div className="staggered-menu-header-top">
          <Link href="/">
            <div className="sm-logo" aria-label="Logo">
              <img
                src="../../static/logo.svg"
                alt="McMurtry College"
                className="sm-logo-img"
                draggable={false}
              />
              <span className="sm-logo-text">McMurtry College</span>
            </div>
          </Link>
          
          <div className="sm-header-actions">
            {/* Mobile toggle button */}
            <button
              ref={toggleBtnRef}
              className="sm-toggle sm-mobile-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="staggered-menu-panel"
              onClick={toggleMenu}
              type="button"
            >
              <span ref={iconRef} className="sm-hamburger-icon" aria-hidden="true">
                <span className="sm-hamburger-line" />
                <span className="sm-hamburger-line" />
                <span className="sm-hamburger-line" />
              </span>
            </button>
          </div>
        </div>

        {/* Desktop navigation bar */}
        <div className="staggered-menu-header-nav sm-desktop-nav-wrapper">
          <nav className="sm-desktop-nav">
            {navbar_headers.map((header, index) => {
              const hasDropdown = header.subheaders && header.subheaders.length > 0;
              
              if (!hasDropdown && header.to) {
                // Direct link without dropdown
                return (
                  <div key={header.name} className="sm-nav-item">
                    <Link href={header.to}>
                      <a className="sm-nav-button sm-nav-direct-link">
                        {header.name}
                      </a>
                    </Link>
                  </div>
                );
              }
              
              // Regular dropdown menu
              return (
                <div 
                  key={header.name}
                  className={`sm-nav-item ${hoveredCategory === header.name ? 'expanded' : ''}`}
                  onMouseEnter={() => setHoveredCategory(header.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <button className="sm-nav-button">
                    {header.name}
                    <span className="sm-nav-arrow">▼</span>
                  </button>
                  <div className="sm-dropdown">
                    {header.subheaders.map((subheader) => {
                      // Check if it's an external URL (starts with http)
                      const isExternal = subheader.to.startsWith('http');

                      if (isExternal) {
                        return (
                          <a
                            key={subheader.name}
                            href={subheader.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm-dropdown-item"
                          >
                            {subheader.name}
                          </a>
                        );
                      }

                      return (
                        <Link href={subheader.to} key={subheader.name}>
                          <a className={`sm-dropdown-item ${router.pathname === subheader.to ? 'active' : ''}`}>
                            {subheader.name}
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </header>

      <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
        <div className="sm-panel-inner">
          {Object.entries(groupedItems).map(([category, items]) => {
            const isExpanded = expandedCategories.includes(category);
            return (
              <div key={category} className="sm-category-group" data-category={category}>
                <button 
                  className="sm-category-title-button"
                  onClick={() => toggleCategory(category)}
                  aria-expanded={isExpanded}
                >
                  <h3 className="sm-category-title">{category}</h3>
                  <span className={`sm-category-arrow ${isExpanded ? 'expanded' : ''}`}>›</span>
                </button>
                {isExpanded && (
                  <ul className="sm-panel-list" role="list">
                    {items.map((item, idx) => {
                      // Check if it's an external URL (starts with http)
                      const isExternal = item.link.startsWith('http');

                      if (isExternal) {
                        return (
                          <li className="sm-panel-itemWrap" key={item.label + idx}>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="sm-panel-item"
                              onClick={handleItemClick}
                            >
                              <span className="sm-panel-itemLabel">{item.label}</span>
                            </a>
                          </li>
                        );
                      }

                      return (
                        <li className="sm-panel-itemWrap" key={item.label + idx}>
                          <Link href={item.link}>
                            <a className={`sm-panel-item ${router.pathname === item.link ? 'active' : ''}`} onClick={handleItemClick}>
                              <span className="sm-panel-itemLabel">{item.label}</span>
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default StaggeredMenu;

