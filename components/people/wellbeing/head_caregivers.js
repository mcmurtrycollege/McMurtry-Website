import React from "react";
import { Box } from "rebass";
import Title from "../../general/title";
import ContactCards from "../../general/contactcards";
import "./wellbeing.css";
import { head_caregivers } from "./wellbeing.json";

const HeadCaregivers = () => (
  <div className="wellbeing-page">
    <Title width={300} title="Caregiving" />
    <Box
      width={[1, 0.7, 0.6, 0.5]}
      ml="auto"
      mr="auto"
      className="wellbeing-description"
    >
      {head_caregivers.description}
    </Box>
    <Box width={[0.8, 0.1]} className='subtitle' ml='auto' mr='auto'>
            <h2>Head Caregivers</h2>
    </Box>
    <div>
      <ContactCards content={head_caregivers.members} width={200} />
    </div>
  </div>
);

export default HeadCaregivers;
