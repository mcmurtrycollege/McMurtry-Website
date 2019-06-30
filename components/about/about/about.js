import React from 'react';
import { Box, Image } from 'rebass';
import Title from '../../general/title';
import './about.css';
import { about, burtDeeDee } from './about.json';

const About = () => (
    <div className='about-page'>
        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={10}>
            <Title width={340} title="About McMurtry" />
            <Image src='../../../../static/mcm_commons.jpg' alt='' width={360} style={{ padding: '10px 20px', float: 'left' }} />
            {
                about.map(line => (
                    <p key={line.slice(0,10)}>{line}</p>
                ))
            }
        </Box>
        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={50}>
            <Title width={[300, 400]} title="Burt and Deedee McMurtry" />
            <Image src='../../../../static/burt_deedee.jpg' alt='' width={320} style={{ padding: '10px 20px', float: 'right' }} />
            {
                burtDeeDee.map(line => (
                    <p key={line.slice(0,10)}>{line}</p>
                ))
            }
        </Box>
    </div>

)

export default About;