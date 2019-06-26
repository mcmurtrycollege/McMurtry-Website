import React from 'react';
import Link from 'next/link'
import './navbar.css';
import { navbar_links } from './navbar.json';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
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
                    <img src='https://icon.now.sh/burger/3A3F4F/30' alt="Menu" />
                </div>
                <div className={this.state.hidden ? 'oweek-navbar-hidden' : 'oweek-navbar-visible'}>
                    <div className='oweek-navbar-close' onClick={this.toggleNavbar}>
                        <img src='https://icon.now.sh/x/DCDFE5/20' alt='X'/>
                    </div>
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