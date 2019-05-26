import React from 'react';
import { Box, Flex } from 'rebass';
import Cards from '../../../contactcards';
import Title from '../../../title';
import { internal, external, social } from './committees.json';
import './committees.css';

const divisions = [internal, external, social];

const division_names = ["Internal Committees", "External Committees", "Social Committees"];

export default class Committees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            division: 0,
            committee: 0
        };
        this.changeDivision = this.changeDivision.bind(this);
        this.changeCommittee = this.changeCommittee.bind(this);
    }

    changeDivision(index) {
        this.setState({
            division: index,
            committee: 0
        })
    }

    changeCommittee(index) {
        this.setState({ committee: index })
    }

    render() {

        return (
            <div className="committee-page">
                <Title width={280} title="Committees" />
                <div>
                    <Flex justifyContent='center' flex='wrap' flexDirection='row'>
                        {
                            division_names.map(division => (
                                <Box key={division} width={[100, 150]}>
                                    <div onClick={() => this.changeDivision(division_names.indexOf(division))}
                                        className={this.state.division === division_names.indexOf(division) ? "active-division" : "inactive-division"}>
                                        <p className='division-key'>{`${division}`}</p>
                                    </div>
                                </Box>
                            ))
                        }
                    </Flex>
                </div>
                <div>
                    <Flex justifyContent='center' flex='wrap' flexDirection='row'>
                        {
                            divisions[this.state.division].map(committee => (
                                <Box key={committee.name} width={[50, 75]}>
                                    <div onClick={() => this.changeCommittee(divisions[this.state.division].indexOf(committee))}
                                        className={this.state.committee === divisions[this.state.division].indexOf(committee) ? "active-committee" : "inactive-committee"}>
                                        <p className='committee-key'>{committee.name}</p>
                                    </div>
                                </Box>
                            ))
                        }
                    </Flex>
                </div>
                <div>
                    <Box width={[0.9, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='committee-description'>
                        <h1 className='division-title'>{divisions[this.state.division][this.state.committee].name}</h1>
                        {divisions[this.state.division][this.state.committee].description}
                    </Box>
                    <Box width={165} className='members-title' ml='auto' mr='auto'>
                        <h1 className='members-title-content'>Members</h1>
                    </Box>
                    <Cards content={divisions[this.state.division][this.state.committee].members} height={110} width={240} />
                </div>
            </div>
        )
    }
}