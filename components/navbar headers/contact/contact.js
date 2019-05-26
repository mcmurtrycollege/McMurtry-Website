import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../../title';
import './contact.css';

const contacts = [
    {
        name: "McMurtry College",
        email: "mcmurtry@rice.edu"
    },
    {
        position: "College Coordinator",
        name: "Jackie Carrizales",
        email: "jackie.carrizales@rice.edu"
    },
    {
        position: "Magister",
        name: "Margaret Beier",
        email: "beier@rice.edu"
    },
    {
        position: "Magister",
        name: "Chris Stickney",
        email: "stickney@rice.edu"
    }
]

const Contact = () => (
    <div className="contact-page">
        <Title width={220} title="Contact" />
        <Box width={[1, 0.8, 0.7, 0.6]} ml='auto' mr='auto'>
            <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
                {
                    contacts.map(({ position, name, email }) => (
                        <Box width={300} className='contact-card-shell' key={`${name}`}>
                            <a href={`mailto:${email}`} style={{ textDecoration: 'none' }}>

                                <div className="contact-card">
                                    {
                                        position !== undefined ? (
                                            <p className='contacts-position'>{position}</p>
                                        ) : (
                                                null
                                            )
                                    }
                                    <h2 className='contacts-name'>{name}</h2>
                                    <h2 className='contacts-email'><img src="https://icon.now.sh/arrow/422a4C/11" alt="email" />{' '}{email}</h2>
                                </div>
                            </a>

                        </Box>
                    ))
                }
            </Flex>
        </Box>
    </div>
)

export default Contact;