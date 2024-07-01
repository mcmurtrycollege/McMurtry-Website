import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../../general/title';
import ExpandableCard from '../../general/expandablecards';
import './wellbeing.css';
import { head_RHAs, RHAs } from './wellbeing.json';


const ResidentHealthAdvisors = () => {
    let head_entries = [];
    for (let i = 0; i < head_RHAs.members.length; i++) {
        head_entries.push(
            <ExpandableCard key={`${head_RHAs.members[i].name}`} name={head_RHAs.members[i].name}
                bio={head_RHAs.members[i].bio} photo={head_RHAs.members[i].photo} email={head_RHAs.members[i].email}
                phone={head_RHAs.members[i].phone} />
        )
    }
    let entries = [];
    for (let i = 0; i < RHAs.members.length; i++) {
        entries.push(
            <ExpandableCard key={`${RHAs.members[i].name}`} name={RHAs.members[i].name}
                bio={RHAs.members[i].bio} photo={RHAs.members[i].photo} email={RHAs.members[i].email}
                phone={RHAs.members[i].phone} />
        )
    }
    return (
        <div className='wellbeing-page'>
            <Title width={300} title="Rice Health Advisors" smallText={true} />
            <Box width={[1, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='wellbeing-description'>
                {RHAs.description}
                <p align="center"><strong>Click to view the RHAs' bios!</strong></p>
            </Box>

            <Box width={[330]} ml='auto' mr='auto'>
                <h1 className='division-title'>Head RHAs</h1>
            </Box>
            <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
                <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
                    {
                        head_entries.map(entry => (
                            <Flex flexDirection='column' width={[1, 0.33]} key={`C+${head_entries.indexOf(entry)}`}>
                                {entry}
                            </Flex>
                        ))
                    }
                </Flex>
            </Box>
            <Box width={[330]} ml='auto' mr='auto'>
                <h1 className='division-title'>RHAs</h1>
            </Box>
            <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
                <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
                    {
                        entries.map(entry => (
                            <Flex flexDirection='column' width={[1, 0.33]} key={`C+${entries.indexOf(entry)}`}>
                                {entry}
                            </Flex>
                        ))
                    }
                </Flex>
            </Box>
        </div>
    )
}

export default ResidentHealthAdvisors;