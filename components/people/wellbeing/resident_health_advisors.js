import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Title from '../../general/title';
import ContactCards from '../../general/contactcards';
import './wellbeing.css';
import { RHAs } from './wellbeing.json';

class RhaCard extends React.Component {
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
        dropdownImageStyle.maxHeight = this.state.contentVisible ? ('0') : ('300px')

        return (
            <Box width={1} onClick={this.handleClick}>
                <div className={this.state.contentVisible ? 'rha-card-visible' : 'rha-card-hidden'}>
                    <div className='rha-image-dropdown' style={dropdownImageStyle}>
                        <Box className='rha-image' width={[0.9, 0.9]}>
                            <Image src={this.props.photo} alt='' />
                        </Box>
                    </div>
                    <h2 className='name'>{this.props.name}</h2>

                    <h3 className="contact-phone"><img src="../../../../static/icons/phone.svg" alt="Phone: " />{' '}{this.props.phone}</h3>
                    <a href={`mailto:${this.props.email}`} className='link'>
                        <h3 className={this.state.contentVisible ? 'contact-email-visible' : 'contact-email-hidden'}><img src="../../../../static/icons/email.svg" alt="Email: " />{' '}{this.props.email}</h3>
                    </a>

                    <div style={dropdownStyle} className='rha-dropdown'>
                        <p><strong>Bio: </strong>{this.props.bio}</p>
                    </div>
                </div>
            </Box>
        )
    }
}

const ResidentHealthAdvisors = () => {
    let entries = [];
    for (let i = 0; i < RHAs.members.length; i++) {
        entries.push(
            <RhaCard key={`${RHAs.members[i].name}`} name={RHAs.members[i].name}
                bio={RHAs.members[i].bio} photo={RHAs.members[i].photo} email={RHAs.members[i].email}
                phone={RHAs.members[i].phone} />
        )
    }
    return (
    <div className='wellbeing-page'>
        <Title width={300} title="Rice Health Advisors" smallText={true} />
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='wellbeing-description'>
            {RHAs.description}
            <p align="center"><strong>Click to view the RHAs' bios!</strong></p>
        </Box>

        <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
            <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
                {
                    entries.map(entry => (
                        <Flex flexDirection='column' width={[1, 0.33]} key={`C+${entries.indexOf(entry)}`}>
                            {entry}
                        </Flex>
                    ))
                }
            </Flex>
        </Box>
    </div>
    )
}

export default ResidentHealthAdvisors;