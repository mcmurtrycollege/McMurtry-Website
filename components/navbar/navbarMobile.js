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
            subheader: null
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.showSubheader = this.showSubheader.bind(this);
        this.closeSubheader = this.closeSubheader.bind(this);
    }

    toggleNavbar() {
        this.setState({ hidden: !this.state.hidden })
    }

    showSubheader(index) {
        this.setState({ subheader: index })
    }

    closeSubheader() {
        this.setState({ subheader: null })
    }

    render() {
        let mainHeaders = []
        let menus = []
        let hidden = this.state.hidden ? { left: '100%' } : { left: 0 }
        for (let i = 0; i < navbar_headers.length; i++) {
            mainHeaders.push(
                <div className='main-header' key={navbar_headers[i].name}>
                    <a onClick={() => this.showSubheader(i)}>{navbar_headers[i].name}</a>
                </div>
            )
            menus.push(
                <div className={(this.state.subheader === i) ? ('subheader-display') : ('subheader-hidden')} key={`${navbar_headers[i].name}-menu`}>
                    <div onClick={this.closeSubheader} className='subheader-back'>
                        <p>← Back</p>
                    </div>
                    {
                        navbar_headers[i].subheaders.map(({ name, to }) => (
                            <Link href={to} key={name}>
                                <div className='subheader-item'>
                                    {name}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            )
        }

        return (
            <div>
                <div className='fixed-mobile-header'>
                    <img className="show-navbar" src='https://icon.now.sh/burger/515768/30' alt="Menu" onClick={this.toggleNavbar} />
                    <Link href='/'>
                        <div className='header-crest-mobile'>
                            <Image src='../static/logo.svg' alt="" />
                            <p>McMurtry College</p>
                        </div>
                    </Link>
                </div>
                <div className='mobile-navbar' style={hidden}>
                    <div className='main-menu'>
                        <img className='close-navbar' src="https://icon.now.sh/x/DCDFE5/25" alt="X" onClick={this.toggleNavbar} />
                        {mainHeaders}
                    </div>
                    {menus}
                </div>
            </div>
        )
    }
}

export default Navbar;