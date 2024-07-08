import { Box, Image } from 'rebass';
import "./expandablecards.css"

class ExpandableCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contentVisible: false }
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick() {
        this.setState({ contentVisible: !this.state.contentVisible })
    }

    render() {
        let dropdownStyle = {}
        let dropdownImageStyle = {}
        dropdownStyle.maxHeight = this.state.contentVisible ? ('650px') : ('0')
        dropdownImageStyle.maxHeight = this.state.contentVisible ? ('0') : ('450px')

        return (
            <Box width={1} onClick={this.handleClick}>
                <div className={this.state.contentVisible ? 'card-visible' : 'expandable-card-hidden'}>
                    {this.props.photo &&
                        <div className='expandable-image-dropdown' style={dropdownImageStyle}>
                            <Box className='expandable-image' width={[0.9, 0.7]}>
                                <Image src={this.props.photo} alt='' />
                            </Box>
                        </div>
                    }
                    <h2 className='name'>{this.props.name}</h2>
                    <h3 className="contact-phone" hidden={this.props.phone == null}><img src="../../../../static/icons/phone.svg" alt="Phone: " />{' '}{this.props.phone}</h3>
                    {this.props.email &&
                        <a href={`mailto:${this.props.email}`} className='link'>
                            <h3 className={this.state.contentVisible ? 'contact-email-visible' : 'contact-email-hidden'}><img src="../../../../static/icons/email.svg" alt="Email: " />{this.props.email}</h3>
                        </a>
                    }

                    <div style={dropdownStyle} className='expandable-dropdown'>
                        <p><strong>Bio: </strong>{this.props.bio}</p>
                    </div>
                </div>
            </Box>
        )
    }
}

export default ExpandableCard;