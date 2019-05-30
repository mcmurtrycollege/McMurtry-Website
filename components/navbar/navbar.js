import React from 'react';
import Link from 'next/link';
import './navbar.css';
import McmLogo from '../mcmLogo';
import navbar_items from './navbar_content';

const DropDownWide = props => {
    const h = props.expanded ? (500) : (0)
    const dropDownHeightStyle = {
        maxHeight: `${h}px`,
    }
    return (
        <div className='dropdown-item' onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} style={{ width: '10%' }}>
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
    const h = props.expanded ? (500) : (0)
    const dropDownHeightStyle = {
        maxHeight: `${h}px`,
    }
    return (
        <div className='dropdown-item'>
            <div>
                {
                    props.headerTo !== undefined ? (
                        <Link href={props.headerTo}>
                            <div className='dropdown-header' onClick={props.handleClick}>
                                {props.header}
                            </div>
                        </Link>
                    ) : (
                            <div className='dropdown-header' onClick={props.handleClick}>
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
        let headerStates = []
        for (let i = 0; i < props.dropDownItems.length; i++) {
            headerStates.push(false)
        }
        this.state = {
            closed: true,
            fixedNavbar: false,
            headerStates: headerStates
        }
        this.showSubheader = this.showSubheader.bind(this)
        this.hideSubheader = this.hideSubheader.bind(this)
        this.toggleSubheader = this.toggleSubheader.bind(this)
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.scrollHandler = this.scrollHandler.bind(this);
    }

    showSubheader(indx) {
        let current = this.state.headerStates
        current[indx] = true
        this.setState({ headerStates: current })
    }

    hideSubheader(indx) {
        let current = this.state.headerStates
        current[indx] = false
        this.setState({ headerStates: current })
    }

    toggleSubheader(indx) {
        let current = this.state.headerStates
        current[indx] = !this.state.headerStates[indx]
        this.setState({ headerStates: current })
    }

    toggleNavbar() {
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
            fixedNavbar.marginTop = `-${document.getElementById('mcm-header').clientHeight + 0}px`
        }

        let wideNavbar = []
        let narrowNavbar = []

        for (let k = 0; k < this.props.dropDownItems.length; k++) {
            let item = this.props.dropDownItems[k]
            wideNavbar.push(
                <DropDownWide handleMouseEnter={() => this.showSubheader(k)} handleMouseLeave={() => this.hideSubheader(k)}
                    expanded={this.state.headerStates[k]} header={item.header} headerTo={item.headerTo} dropDownChildren={item.dropDownChildren}
                    key={`${item.header}`} />
            )
            narrowNavbar.push(
                <DropDownNarrow handleClick={() => this.toggleSubheader(k)} expanded={this.state.headerStates[k]}
                    header={item.header} headerTo={item.headerTo} dropDownChildren={item.dropDownChildren} key={`${item.header}`} />
            )
        }

        return (
            <div>
                <div className='navbar-crest'>
                    <McmLogo />
                </div>
                <div className='wide-navbar' style={fixedNavbar}>
                    <div className='filler-box' />
                    {wideNavbar}
                    <div className='filler-box' />
                </div>
                <div className='narrow-navbar'>
                    <div className='narrow-navbar-toggle' >
                        <img style={burgerStyle} onClick={this.toggleNavbar} src='https://icon.now.sh/burger/2B2F3A/24' alt='burger' />
                    </div>
                    <McmLogo />
                    <div className='narrow-navbar-menu' style={narrowNavBarStyle}>
                        {narrowNavbar}
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