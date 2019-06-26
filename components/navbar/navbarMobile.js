import React from 'react';
import Link from 'next/link';
import './navbarMobile.css';
import { Box, Image } from 'rebass';
import { navbar_headers } from './navbar.json'

class MobileDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        return (
            <div>
                <div className='mobile-nav-header'>
                    {this.props.name}
                </div>
                <div className='mobile-navbar-subheaders'>
                    {
                        this.props.subheaders.map(({ name, to }) => (
                            <Link href={to} key={name}>
                                <div className='mobile-nav-subheader'>{name}</div>
                            </Link>
                        ))
                    }
                </div>

            </div>
        )
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: false
        }
        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar() {
        this.setState({ hidden: !this.state.hidden })
    }
    render() {
        return (
            <div>
                <div className='fixed-mobile-nav-header'>
                    <img className='navbar-toggle' onClick={this.handleClick} src='https://icon.now.sh/burger/2B2F3A/30' alt="Menu" />
                    <Box className='mobile-nav-crest'>
                        <Image src='../../static/crest.svg' alt="McMurtry College" />
                    </Box>
                </div>
                <div className='mobile-nav'>
                    {
                        navbar_headers.map(({ name, subheaders }) => (
                            <MobileDropdown name={name} subheaders={subheaders} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;