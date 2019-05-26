import React from 'react';
import Link from 'next/link';
import './navbar.css';
import McmLogo from '../mcmLogo';
import navbar_items from './navbar_content';
import { Box, Image } from 'rebass'

const DropDownWide = props => {
    let h;
    if (props.expanded) {
        h = 500;
    } else {
        h = 0;
    }
    const dropDownHeightStyle = {
        maxHeight: `${h}px`,
    }
    return (
        <div className='dropdown-item' onMouseEnter={() => props.handleMouseEnter()} onMouseLeave={() => props.handleMouseLeave()} style={{ width: '10%' }}>
            <div>
                {
                    props.headerTo !== undefined ? (
                        <Link href={props.headerTo}>
                            <div className={props.expanded ? ('dropdown-header-active') : ('dropdown-header-inactive')}>
                                {props.header}
                            </div>
                        </Link>
                    ) : (
                            <div className={props.expanded ? ('dropdown-header-active') : ('dropdown-header-inactive')}>
                                {props.header}
                            </div>
                        )
                }
            </div>
            <div className='dropdown-subheaders' style={dropDownHeightStyle}>
                {
                    props.dropDownChildren.map(({ subheader, to, href }) => (
                        href === undefined ? (
                            <Link href={to} key={`${subheader}`}>
                                <div className='dropdown-subheader'>
                                    {subheader}
                                </div>
                            </Link>
                        ) : (
                                <a href={href} key={`${subheader}`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                    <div className='dropdown-subheader'>
                                        {subheader}
                                    </div>
                                </a>
                            )

                    ))
                }
            </div>
        </div>
    )
}

const DropDownNarrow = props => {
    let h;
    if (props.expanded) {
        h = 500;
    } else {
        h = 0;
    }
    const dropDownHeightStyle = {
        maxHeight: `${h}px`,
    }
    return (
        <div className='dropdown-item'>
            <div>
                {
                    props.headerTo !== undefined ? (
                        <Link href={props.headerTo}>
                            <div className='dropdown-header' onClick={() => props.handleClick()}>
                                {props.header}
                            </div>
                        </Link>
                    ) : (
                            <div className='dropdown-header' onClick={() => props.handleClick()}>
                                {props.header}
                                {'      '}
                                <img className='arrow' style={props.expanded ? ({ transform: 'rotate(90deg)' }) : ({})} src={`https://icon.now.sh/chevron/2B2F3A/10`} alt=">" />
                            </div>
                        )
                }
            </div>
            <div className='dropdown-subheaders' style={dropDownHeightStyle}>
                {
                    props.dropDownChildren.map(({ subheader, to, href }) => (
                        href === undefined ? (
                            <Link href={to} key={`${subheader}`}>
                                <div className='dropdown-subheader'>
                                    {subheader}
                                </div>
                            </Link>
                        ) : (
                                <a href={href} key={`${subheader}`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                    <div className='dropdown-subheader'>
                                        {subheader}
                                    </div>
                                </a>
                            )
                    ))
                }
            </div>
        </div>
    )
}


class NavBar extends React.Component {
    constructor(props) {
        super(props)
        let activeIndices = []
        for (let i = 0; i < this.props.dropDownItems.length; i++) {
            activeIndices.push(false)
        }
        this.state = {
            activeHeaders: activeIndices,
            closed: true,
            fixedNavbar: false
        }
        this.showSubheaders = this.showSubheaders.bind(this);
        this.hideSubheaders = this.hideSubheaders.bind(this);
        this.toggleSubheaders = this.toggleSubheaders.bind(this);
        this.openNavbar = this.openNavbar.bind(this);
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    showSubheaders(indx) {
        let newActiveHeaders = this.state.activeHeaders
        newActiveHeaders[indx] = true
        this.setState({ activeHeaders: newActiveHeaders })
    }

    hideSubheaders(indx) {
        let newActiveHeaders = this.state.activeHeaders
        newActiveHeaders[indx] = false
        this.setState({ activeHeaders: newActiveHeaders })
    }

    toggleSubheaders(indx) {
        let newActiveHeaders = this.state.activeHeaders
        newActiveHeaders[indx] = !this.state.activeHeaders[indx]
        this.setState({ activeHeaders: newActiveHeaders })
    }

    openNavbar() {
        this.setState({
            closed: !this.state.closed
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler)
    }

    scrollHandler() {
        if (window.scrollY > document.getElementById('mcm-header').clientHeight) {
            this.setState({ fixedNavbar: true })
        } else {
            this.setState({ fixedNavbar: false })
        }
    }

    render() {
        let narrowNavBarStyle = {};
        let burgerStyle = { transition: 'transform 0.2s ease-in-out' };
        if (this.state.closed) {
            narrowNavBarStyle.maxHeight = '0px'
        } else {
            narrowNavBarStyle.maxHeight = '1000px'
            burgerStyle.transform = 'rotate(90deg)'
        }

        let fixedNavbar = {}
        if (this.state.fixedNavbar) {
            fixedNavbar.position = 'fixed'
            fixedNavbar.marginTop = `-${document.getElementById('mcm-header').clientHeight}px`
        }

        let wideNavbarItems = []
        let narrowNavbarItems = []

        for (let i = 0; i < this.props.dropDownItems.length; i++) {
            let item = this.props.dropDownItems[i]
            wideNavbarItems.push(
                <DropDownWide handleMouseEnter={() => this.showSubheaders(i)} handleMouseLeave={() => this.hideSubheaders(i)}
                    header={item.header} headerTo={item.headerTo} dropDownChildren={item.dropDownChildren}
                    key={`${item.header}`} expanded={this.state.activeHeaders[i]} />
            )
            narrowNavbarItems.push(
                <DropDownNarrow onClick={() => this.toggleSubheaders(i)}
                    header={item.header} headerTo={item.headerTo} dropDownChildren={item.dropDownChildren}
                    key={`${item.header}`} expanded={this.state.activeHeaders[i]} />
            )
        }

        return (
            <div>
                <div className='navbar-crest'>
                    <McmLogo />
                </div>
                <div className='wide-navbar' style={fixedNavbar}>
                    <div className='filler-box' />
                    {wideNavbarItems}
                    <div className='filler-box' />
                </div>
                <div className='narrow-navbar'>
                    <div className='narrow-navbar-toggle' >
                        <img style={burgerStyle} onClick={this.openNavbar} src='https://icon.now.sh/burger/2B2F3A/24' alt='burger' />
                    </div>
                    <McmLogo />
                    <div className='narrow-navbar-menu' style={narrowNavBarStyle}>
                        {narrowNavbarItems}
                    </div>
                </div>
            </div>
        )
    }
}

const Navbar = () => (
    <div>
        <NavBar dropDownItems={navbar_items} />
    </div>
)

export default Navbar;