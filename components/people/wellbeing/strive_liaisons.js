import React from 'react';
import { Box } from 'rebass';
import Title from '../../general/title';
import ContactCards from '../../general/contactcards';
import './wellbeing.css';
import { strive_liaisons } from './wellbeing.json';

const StriveLiaisons = () => (
    <div className='wellbeing-page'>
        <Title width={300} title="Strive Liaisons" />
        <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='wellbeing-description'>
            {strive_liaisons.description}
        </Box>
        <div>
            <ContactCards content={strive_liaisons.members} width={200} />
        </div>
    </div>
)

export default StriveLiaisons;