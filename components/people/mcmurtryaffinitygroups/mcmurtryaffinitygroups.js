import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../../general/title';
import Cards from '../../general/contactcards';
import './mcmurtryaffinitygroups.css';
import { heads } from './mcmurtryaffinitygroups.json';

export default class McMurtryAffinityGroups extends React.Component {
    render(){
        return (
            <div className='mcmurtry-affinity-groups-page'>
                <Title width={400} title="McMurtry Affinity Groups" />
                <Box width={[0.8, 0.5]} ml='auto' mr='auto'>
                    <p>If you are interested in joining one of the affinity groups, please reach out to the affinity group heads listed below</p>
                </Box>
                <Cards content={heads} height={180} width={260} />
            </div>
        )
    }
}