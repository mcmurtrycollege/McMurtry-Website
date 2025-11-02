import React from 'react';
import Link from 'next/link';
import './navbarMobile.css';
import { Box, Image } from 'rebass';
import { navbar_headers } from './navbar.json'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            expandedCategories: []
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleCategory = this.toggleCategory.bind(this);
    }

    toggleNavbar() {
        this.setState({ hidden: !this.state.hidden })
    }

    toggleCategory(index) {
        const { expandedCategories } = this.state;
        if (expandedCategories.includes(index)) {
            this.setState({ expandedCategories: expandedCategories.filter(i => i !== index) });
        } else {
            this.setState({ expandedCategories: [...expandedCategories, index] });
        }
    }

    render() {
        let hidden = this.state.hidden ? { left: '100%' } : { left: 0 }
        
        return (
            <div>
                <div className='fixed-mobile-header'>
                    <img className="show-navbar" src='../../static/icons/menu.svg' alt="Menu" onClick={this.toggleNavbar} />
                    <Link href='/'>
                        <div className='header-crest-mobile'>
                            <Box width={40}>
                                <Image src='../../static/logo.svg' alt="" />
                            </Box>
                            <p>McMurtry College</p>
                        </div>
                    </Link>
                </div>
                <div className='mobile-navbar' style={hidden}>
                    <div className='mobile-navbar__container'>
                        <img className='close-navbar' src="../../static/icons/x.svg" alt="X" onClick={this.toggleNavbar} />
                        <div className='accordion-menu'>
                            {navbar_headers.map((header, index) => {
                                const isExpanded = this.state.expandedCategories.includes(index);
                                return (
                                    <div className='accordion-category' key={header.name}>
                                        <div 
                                            className='accordion-header' 
                                            onClick={() => this.toggleCategory(index)}
                                        >
                                            <span>{header.name}</span>
                                            <span className={`accordion-arrow ${isExpanded ? 'expanded' : ''}`}>
                                                ›
                                            </span>
                                        </div>
                                        <div className={`accordion-content ${isExpanded ? 'expanded' : ''}`}>
                                            {header.subheaders.map(({ name, to }) => (
                                                <Link href={to} key={name}>
                                                    <div className='accordion-item' onClick={this.toggleNavbar}>
                                                        {name}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;