import React from 'react';
import Link from 'next/link';
import './navbarSplashPage.css';
import McmLogo from '../mcmLogo';
import { navbar_headers } from './navbar.json';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fixedNavbar: false,
        }
        this.scrollHandler = this.scrollHandler.bind(this);
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
        let fixedNavbar = {}
        if (this.state.fixedNavbar) {
            fixedNavbar.position = 'fixed'
            fixedNavbar.top = '0'
        }
        return (
            <div>
                <div className='navbar-crest'>
                    <McmLogo />
                </div>
                <div className='splash-page-navbar' style={fixedNavbar}>
                    {
                        navbar_headers.map(({ name, subheaders }) => (
                            <div className='nav-main-category' key={name}>
                                <button className='nav-main-dropdown-opener'>
                                    {name}
                                </button>
                                <div className='nav-main-subheaders'>
                                    {
                                        subheaders.map(({ name, to }) => (
                                            <Link href={to} key={name}><a>{name}</a></Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;