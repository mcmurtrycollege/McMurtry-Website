import React from 'react';
import { Box } from 'rebass';
import Title from '../../../title';
import ContactCards from '../../../contactcards';
import {fellows_description, fellows } from './fellows.json';
import './fellows.css';

const AcademicFellows = () => (
    <div className='fellows-page'>
        <Title width={340} title="Academic Fellows" />
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='fellows-description'>
            {fellows_description}
        </Box>
        <div style={{marginTop: '2%'}}>
            <ContactCards content={fellows} width={280} height={180} />
        </div>
    </div>
)

export default AcademicFellows;