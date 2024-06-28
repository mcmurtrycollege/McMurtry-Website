import React from 'react';
import Link from 'next/link'
import { Box, Image } from 'rebass';
import './navbar.css';
import { navbar_links } from './navbar.json';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    render() {
        return (
            <div>
                <div className='oweek-navbar-open' onClick={this.toggleNavbar}>
                    <img src='../../../static/icons/menu.svg' alt="Menu" />
                </div>
                <div className={this.state.hidden ? 'oweek-navbar-hidden' : 'oweek-navbar-visible'}>
                    <div className='oweek-navbar-close' onClick={this.toggleNavbar}>
                        <img src='../../../static/icons/x.svg' alt='X' />
                    </div>
                    <Link href='/'>
                        <a>
                            <Box width={[0.2, 0.3]} ml='auto' mr='auto'>
                                <Image src='../../../static/logo.svg' alt="" />
                            </Box>
                        </a>
                    </Link>
                    {
                        navbar_links.map(({ name, link }) => (
                            <Link href={link} key={name}>
                                <div className='oweek-navbar-link'>
                                    <p>{name}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;