import React, { useState } from "react";
import { Box, Flex } from "rebass";
import Cards from "../../general/contactcards";
import { justices } from "./court.json";

const Court = () => {
  const [activeTab, setActiveTab] = useState('Chief Justices');

  const chiefs = justices.filter((justice) => justice.position === "Chief Justice");
  const associates = justices.filter((justice) => justice.position === "Associate Justice");

  const tabs = [
    { id: 'Chief Justices', data: chiefs },
    { id: 'Associate Justices', data: associates }
  ];

  const activeData = tabs.find(t => t.id === activeTab)?.data || [];

  return (
    <div className="court-page">
      <div className='court-hero'>
        <h1 className='court-main-title'>McCourt</h1>
      </div>

      <div className='court-tabs'>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`court-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.id}
          </button>
        ))}
      </div>

      <div className='fade-in' key={activeTab}>
        <Box width={[330]} ml="auto" mr="auto">
          <h2 className="division-title">{activeTab}</h2>
        </Box>
        <Cards content={activeData} width={[270]} minHeight="160px" />
      </div>
    </div>
  );
};

export default Court;