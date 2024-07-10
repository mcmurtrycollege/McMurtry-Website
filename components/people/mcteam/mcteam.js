import React from 'react';
import { Box, Flex, Image } from 'rebass';
import './mcteam.css';
import Title from '../../general/title';
import { mcteam_positions } from './mcteam.json';

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

        let keys = []
        for (let n = 0; n < mcteam_positions.length; n++) {
            keys.push(
                <Box key={mcteam_positions[n].position}>
                    <div onClick={() => this.handleEvent(n)}
                        className={this.state.current === n ? "active-key" : "inactive-key"}>
                        <p className='mcteam-key'>{mcteam_positions[n].position}</p>
                    </div>
                </Box>
            )
        }

        return (
            <div className='mcteam-page'>
                <Title title="McTeam" width={200} />
                <div>
                    <Flex justifyContent='center' flex='wrap' flexDirection='row'>
                        {keys}
                    </Flex>
                </div>
                <Box width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={50} className='position-content'>
                    <h2 className='mcteam-name'>{mcteam_positions[this.state.current].names}</h2>
                    <Box width={[0.8, 0.6, 0.4, 0.3]} mx='auto' >
                        <Image key={this.state.current} src={mcteam_positions[this.state.current].image} />
                    </Box>
                    {
                        mcteam_positions[this.state.current].body.map(line => (
                            <p key={`L-${mcteam_positions[this.state.current].body.indexOf(line)}`}>{line}</p>
                        ))
                    }
                    {
                        this.state.current === 1 ? (
                            <ul>
                                <li>Pick up mail and packages</li>
                                <li>Buy stamps and get envelopes</li>
                                <li>Catch up with Jackie!</li>
                                <li>Borrow an extra room key</li>
                                <li>Do homework</li>
                                <li>Use the staplers, packing tape, scissors, shredder, etc.</li>
                                <li>Take a study break</li>
                                <li>Relax with other Murts</li>
                                <li>Solve puzzles</li>
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