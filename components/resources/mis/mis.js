import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../../general/title';
import './mis.css';
import { content, hours, personnel } from './mis.json';

const MISLinks = [
    {
        text: "Safety Guidelines",
        icon: "https://icon.now.sh/security",
        link: '../../../../static/mis_safety.pdf'
    },
    {
        text: "Equipment Information",
        icon: "../../../../static/icon/building.svg",
        link: "https://docs.google.com/document/d/1kNjTbBWRYK3Xxpgr73z7EFU3-pTms47MdRyTEex4w_E/edit?usp=sharing"
    },
    {
        text: "Email us at",
        icon: "../../../static/icons/email.svg",
        link: "mailto:mcminnovationspace@gmail.com"
    }
]

const McmInovationSpace = () => (
    <div className='mis-page'>
        <Title width={350} title='McMurtry Innovation Space' smallText={true} />
        <Box className='mis-paragraphs' width={[1, 0.8, 0.7, 0.6]} ml='auto' mr='auto'>
            {
                content.map(paragraph => (
                    <p key={content.indexOf(paragraph)}>{paragraph}</p>
                ))
            }
        </Box>
        <Flex flexWrap='wrap' justifyContent='center' flexDirection='row'>
            {
                MISLinks.map(({ text, icon, link }) => (
                    <Box width={250} className='mis-info' style={{ margin: '2%' }} key={icon}>
                        <a href={link} style={{ textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">
                            <div>
                                <img src={`${icon}//DCDFE5/90`} alt='' />
                                <h2 className='mis-link'>{text}
                                {icon === "../../../static/icons/email.svg" ? 
                                (<p style={{fontSize: '0.5em'}}>mcminnovationspace@gmail.com</p>) : (undefined)}</h2>
                            </div>
                        </a>
                    </Box>
                ))
            }
        </Flex>
        <Box width={[1, 0.7]} pb={20} ml='auto' mr='auto' className='schedule-box'>
            <Box width={[0.4, 0.25]} className='subtitle' ml='auto' mr='auto'>
                <h2>Hours</h2>
            </Box>
            <Flex justifyContent='center' flexWrap='wrap' flexDirection='row'>
                {
                    hours.map(({ day, hours }) => (
                        <Box width={150} className='schedule' key={`${day}`}>
                            <h2 className='schedule-item'>{day}</h2>
                            <h2 className='schedule-item' style={{ fontWeight: 'normal' }}>{hours}</h2>
                        </Box>
                    ))
                }
            </Flex>
        </Box>
        <Box width={[0.7, 0.2]} className='subtitle' ml='auto' mr='auto'>
            <h2>Student Personnel</h2>
        </Box>
        <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
            {
                personnel.map(({ name, major, college, email, askMeAbout }) => (
                    <Box width={[0.9, 0.3]} className='mis-contact-card' key={`${name}`}>
                        <div className="mis-contact">
                            <h2 className='mis-name'>{name}</h2>
                            <h2 className='mis-major'>Major: {major}</h2>
                            <h2 className='mis-college'>College: {college}</h2>
                            <a href={`mailto:${email}`} style={{ textDecoration: 'none' }}>
                                <h2 className='mis-email'><img src="../../../static/icons/email.svg" alt="" />{' '}{email}</h2>
                            </a>
                            <h2 className='mis-askMeHeader'>Ask Me About:</h2>
                            <p className='mis-askMeAbout'>{askMeAbout}</p>
                        </div>
                    </Box>
                ))
            }
        </Flex>
    </div>
)

export default McmInovationSpace;