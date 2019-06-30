import React from 'react';
import Link from 'next/link';
import { Box, Image } from 'rebass';
import { navbar_headers } from './navbar.json';
import './NavbarDesktop.css';

class NavbarDesktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            permanent: false
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll() {
        this.setState({permanent: (window.scrollY > 0)})
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler)
    }

    render() {
        let style = this.state.permanent ? {backgroundColor: "#515768"} : {paddingTop: '15px', paddingBottom: '15px', color: "#515768", backgroundColor: "#DCDFE5"}
        return (
            <div className='navbar-wrapper' style={style}>
                <Box width={300} className='header-crest'>
                    <Link href='/'>
                        <Image src='../static/crest.svg' alt="" />
                    </Link>
                </Box>
                <div className='navbar-catagories'>
                    {
                    navbar_headers.map(({ name, subheaders }) => (
                        <div className='navbar-category' key={name}>
                            <button className='navbar-dropdown-opener'>
                                {name}
                            </button>
                            <div className='dropdown-subheaders'>
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

export default NavbarDesktop