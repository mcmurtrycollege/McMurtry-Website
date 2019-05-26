import React from 'react';
import { Box, Flex } from 'rebass';
import './mcteam.css';
import Title from '../../../title';
import { magister_info, head_resident_fellows, second_floor_RA, third_floor_RA, college_coordinator } from './mcteam.json';
const items = [magister_info,
    head_resident_fellows,
    second_floor_RA, third_floor_RA,
    college_coordinator]

for (let i = 0; i < items.length; i++) {
    items[i].index = i;
    items[i].key = items[i].names;
}

const positions = [
    "Magisters", "Head Resident Fellows", "2nd Floor RAs", "3rd Floor RAs", "College Coordinator"
]


export default class McTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(index) {
        this.setState({ current: index })
    }

    render() {
        return (
            <div className='mcteam-page'>
                <Title title="McTeam" width={200}/>
                <div>
                    <Flex justifyContent='center' flex='wrap' flexDirection='row'>
                        {
                            positions.map(position => (
                                <Box key={position}>
                                    <div onClick={() => this.handleEvent(positions.indexOf(position))}
                                        className={this.state.current === positions.indexOf(position) ? "active-key" : "inactive-key"}>
                                        <p className='mcteam-key'>{position}</p>
                                    </div>
                                </Box>
                            ))
                        }
                    </Flex>
                </div>
                <Box width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={50} className='position-content'>
                    <h2 className='mcteam-name'>{items[this.state.current].names}</h2>
                    {
                        items[this.state.current].body.map(line => (
                            <p>{line}</p>
                        ))
                    }
                    {
                        this.state.current === 4 ? (
                            <ul>
                                <li>Buy stamps and get envelopes</li>
                                <li>Pick up mail and packages</li>
                                <li>Borrow an extra key to your room</li>
                                <li>Use the staplers, packing tape, scissors, shredder, etc.</li>
                                <li>Get a hug</li>
                                <li>Do homework or take a study break</li>
                            </ul>
                        ) : (
                                null
                            )
                    }
                </Box>
            </div>

        );
    }
}