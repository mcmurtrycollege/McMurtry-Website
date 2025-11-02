import React from 'react';
import { Box, Flex } from 'rebass';
import ContactCards from '../../general/contactcards';
import { fellows_description, headFellows, fellows } from './fellows.json';
import './fellows.css';

const AcademicFellows = () => (
    <div className='fellows-page'>
        <div className='fellows-hero'>
            <h1 className='fellows-main-title'>Academic Fellows</h1>
        </div>
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='fellows-description'>
            {fellows_description}
        </Box>
        <Box width={[0.7, 0.2]} className='subtitle' ml='auto' mr='auto'>
            <h2>Head Academic Fellows</h2>
        </Box>
        <div style={{ marginTop: '2%' }}>
            <ContactCards content={headFellows} width={280} height={230} />
        </div>
        <Box width={[0.7, 0.2]} className='subtitle' ml='auto' mr='auto'>
            <h2>Academic Fellows</h2>
        </Box>
        <div style={{ marginTop: '2%' }}>
            <ContactCards content={fellows} width={280} height={230} />
        </div>
    </div>
)

export default AcademicFellows;