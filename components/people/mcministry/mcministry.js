import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import Cards from '../../general/contactcards';
import { executive_council, peoples_council, mccabinet } from './mcministry.json';

const McMinistry = () => {
    const [activeTab, setActiveTab] = useState('Executive Council');

    const tabs = [
        { id: 'Executive Council', data: executive_council },
        { id: 'McCabinet', data: mccabinet },
        { id: "People's Council", data: peoples_council }
    ];

    const activeData = tabs.find(t => t.id === activeTab)?.data || [];

    return (
        <div className='mcministry-page'>
            <div className='mcministry-hero'>
                <h1 className='mcministry-main-title'>McMinistry</h1>
            </div>

            <div className='mcministry-tabs'>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`ministry-tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.id}
                    </button>
                ))}
            </div>
            
            <div className='fade-in' key={activeTab}>
                <Box width={[330]} ml='auto' mr='auto'>
                    <h2 className='division-title'>{activeTab}</h2>
                </Box>
                <Cards content={activeData} width={[270]} />
            </div>
        </div>
    )
}

export default McMinistry;