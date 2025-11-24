import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import ContactCards from '../../general/contactcards';
import { paas_description, head_paas, o_week_paas, year_long_paas } from './paas.json';

const PAAs = () => {
    const [activeTab, setActiveTab] = useState('Head PAAs');

    const tabs = [
        { id: 'Head PAAs', data: head_paas },
        { id: 'O-Week PAAs', data: o_week_paas },
        { id: 'Year Long PAAs', data: year_long_paas }
    ];

    const activeData = tabs.find(t => t.id === activeTab)?.data || [];

        return (
            <div className='paas-page'>
        <div className='paas-hero'>
            <h1 className='paas-main-title'>Peer Academic Advisors</h1>
        </div>
            
            <Box width={[1, 0.8, 0.7]} ml='auto' mr='auto' className='paas-description'>
            {paas_description}
            </Box>

            <div className='paas-tabs'>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`paas-tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.id}
                    </button>
                ))}
        </div>

            <div className='fade-in' key={activeTab}>
            <Box width={320} ml='auto' mr='auto'>
                    <h1 className='paas-title'>{activeTab}</h1>
            </Box>
                <ContactCards content={activeData} width={activeTab === 'Year Long PAAs' ? 300 : 280} minHeight="180px" />
        </div>
        </div>
    );
};

export default PAAs;