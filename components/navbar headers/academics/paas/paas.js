import React from 'react';
import { Box } from 'rebass';
import Title from '../../../title';
import ContactCards from '../../../contactcards';
import { paas_description, head_paas, o_week_paas, year_long_paas } from './paas.json';
import './paas.css';

const PAAs = () => (
    <div className='paas-page'>
        <Title width={300} title="Peer Academic Advisors" smallText={true} />
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='paas-description'>
            {paas_description}
        </Box>
        <div>
            <Box width={320} ml='auto' mr='auto'>
                <h1 className='paas-title'>Head PAAs</h1>
            </Box>
            <ContactCards content={head_paas} width={280} height={180} />
        </div>
        <div>
            <Box width={320} ml='auto' mr='auto'>
                <h1 className='paas-title'>O-Week Paas</h1>
            </Box>
            <ContactCards content={o_week_paas} width={320} height={180} />
        </div>
        <div>
            <Box width={320} ml='auto' mr='auto'>
                <h1 className='paas-title'>Year Long PAAs</h1>
            </Box>
            <ContactCards content={year_long_paas} width={300} height={180} />
        </div>
    </div>
)

export default PAAs;