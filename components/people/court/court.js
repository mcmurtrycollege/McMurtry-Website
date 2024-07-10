import React from 'react';
import { Box, Flex } from 'rebass';
import Title from '../../general/title';
import ExpandableCard from "../../general/expandablecards"
import './court.css';
import { justices } from './court.json';

const chiefs = justices.filter((justice) => (justice.position === "Chief Justice")).map(justice =>
    <ExpandableCard key={`${justice.name}`} name={justice.name}
        bio={justice.bio} email={justice.email}
        phone={justice.phone} room={justice.room} />
)
const associates = justices.filter((justice) => (justice.position === "Associate Justice")).map(justice =>
    <ExpandableCard key={`${justice.name}`} name={justice.name}
        email={justice.email} />
)

export default class Court extends React.Component {
    render() {
        return (
            <div className='court-page'>
                <Title width={200} title="McCourt" />
                <Box width={[330]} ml='auto' mr='auto'>
                    <h2 className='division-title'>Chief Justices</h2>
                    <p align="center"><strong>Click to view the CJs' bios!</strong></p>
                </Box>
                <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
                    <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
                        {
                            chiefs.map(entry => (
                                <Flex flexDirection='column' width={[1, 0.33]} key={`C+${chiefs.indexOf(entry)}`}>
                                    {entry}
                                </Flex>
                            ))
                        }
                    </Flex>
                </Box>
                <Box width={[330]} ml='auto' mr='auto'>
                    <h2 className='division-title'>Associate Justices</h2>
                </Box>
                <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
                    <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
                        {
                            associates.map(entry => (
                                <Flex flexDirection='column' width={[1, 0.33]} key={`C+${associates.indexOf(entry)}`}>
                                    {entry}
                                </Flex>
                            ))
                        }
                    </Flex>
                </Box>
            </div>
        )
    }
}