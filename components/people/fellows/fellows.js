import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import ContactCards from '../../general/contactcards';
import { fellows_description, headFellows, fellows } from './fellows.json';

const AcademicFellows = () => {
    const [activeTab, setActiveTab] = useState('Head Academic Fellows');

    const tabs = [
        { id: 'Head Academic Fellows', data: headFellows },
        { id: 'Academic Fellows', data: fellows }
    ];

    const activeData = tabs.find(t => t.id === activeTab)?.data || [];

    return (
        <div className='fellows-page'>
            <div className='fellows-hero'>
                <h1 className='fellows-main-title'>Academic Fellows</h1>
            </div>
            
            <Box width={[1, 0.8, 0.7]} ml='auto' mr='auto' className='fellows-description'>
                {fellows_description}
            </Box>

            <div className='fellows-tabs'>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`fellows-tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.id}
                    </button>
                ))}
            </div>

            <div className='fade-in' key={activeTab}>
                <Box width={[0.8, 0.5]} className='subtitle' ml='auto' mr='auto'>
                    <h2>{activeTab}</h2>
                </Box>
                <div style={{ marginTop: '2%' }}>
                    <ContactCards content={activeData} width={280} minHeight="230px" />
                </div>
            </div>
        </div>
    );
};

export default AcademicFellows;