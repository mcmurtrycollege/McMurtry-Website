import React from 'react';
import * as Scroll from 'react-scroll';
import './navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                <img className='mcm10-burger' src={this.state.open ? "https://icon.now.sh/x/2B2F3A/40" : "https://icon.now.sh/burger/2B2F3A/40"}
                    alt="+" style={this.state.open ? { left: '250px' } : { left: 0 }}
                    onClick={this.toggleNavbar} />
                <div className='mcm10-nav' style={this.state.open ? { left: 0 } : { left: '-250px' }}>
                    {
                        this.props.links.map(({ name, to }) => (
                            <div key={name} className='mcm10-nav-link'>
                                <Scroll.Link to={to} smooth={true} duration={400}>
                                    <div style={{padding: '15px'}}>
                                        {name}
                                    </div>
                                </Scroll.Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Navbar