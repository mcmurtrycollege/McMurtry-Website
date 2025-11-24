import React from 'react';
import { Box } from 'rebass';
import Cards from '../../general/contactcards';
import './wellbeing.css';
import { head_RHAs, RHAs } from './wellbeing.json';

const ResidentHealthAdvisors = () => {
    // Process data to handle empty photos
    const processMembers = (members) => {
        return members.map(member => ({
            ...member,
            // Use a black data URI for missing photos to ensure cards align perfectly
            photo: member.photo && member.photo.trim() !== "" ? member.photo : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
        }));
    };

    const processedHeadRHAs = processMembers(head_RHAs.members);
    const processedRHAs = processMembers(RHAs.members);

    return (
        <div className='wellbeing-page'>
            <div className='wellbeing-hero'>
                <h1 className='wellbeing-main-title'>Rice Health Advisors</h1>
            </div>
            
            <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='wellbeing-description'>
                {RHAs.description}
            </Box>

            <Box width={[1, 0.8]} ml='auto' mr='auto' mt={4}>
                <h1 className='division-title'>Head RHAs</h1>
                <Cards content={processedHeadRHAs} minHeight="200px" />
            </Box>

            <Box width={[1, 0.8]} ml='auto' mr='auto' mt={4} mb={5}>
                <h1 className='division-title'>RHAs</h1>
                <Cards content={processedRHAs} minHeight="200px" />
            </Box>
        </div>
    )
}

export default ResidentHealthAdvisors;