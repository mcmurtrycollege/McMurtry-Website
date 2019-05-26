import React from 'react';
import { Box, Image } from 'rebass';
import './about.css';
import { about, burtDeeDee } from './about.json';

const About = () => (
    <div className='about-page'>
        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={10}>
            <Box className='about-subtitle' mr='auto' ml='auto' width={320} my={20}>
                <h1 style={{ margin: '8px', fontWeight: 'normal' }}>About McMurtry</h1>
            </Box>
            <p>
                <Image src='../../../../static/mcm_commons.jpg' alt='' width={360} style={{ padding: '10px 20px', float: 'left' }} />
                {
                    about.map(line => (
                        <p>{line}</p>
                    ))
                }
            </p>
        </Box>
        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={50}>
            <Box className='about-subtitle' mr='auto' ml='auto' width={[300, 500]} my={20}>
                <h1 style={{ margin: '8px', fontWeight: 'normal' }}>Burt and Deedee McMurtry</h1>
            </Box>
            <p>
                <Image src='../../../../static/burt_deedee.jpg' alt='' width={320} style={{ padding: '10px 20px', float: 'right' }} />
                {
                    burtDeeDee.map(line => (
                        <p>{line}</p>
                    ))
                }
            </p>
        </Box>
    </div>

)

export default About;