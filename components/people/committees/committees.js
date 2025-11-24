import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Cards from '../../general/contactcards';
import { committee_divisions } from './committees.json';

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

        let division_keys = []
        for (let i = 0; i < committee_divisions.length; i++) {
            division_keys.push(
                <Box key={committee_divisions[i].division}>
                    <div onClick={() => this.changeDivision(i)} className={this.state.division === i ? "active-division" : "inactive-division"}>
                        <p className='division-key'>{`${committee_divisions[i].division}`}</p>
                    </div>
                </Box>
            )
        }
        const current_division = committee_divisions[this.state.division]
        let committee_keys = []
        for (let j = 0; j < current_division.committees.length; j++) {
            committee_keys.push(
                <Box key={current_division.committees[j].name}>
                    <div onClick={() => this.changeCommittee(j)} className={this.state.committee === j ? "active-committee" : "inactive-committee"}>
                        <p className='committee-key'>{current_division.committees[j].name}</p>
                    </div>
                </Box>
            )
        }

        return (
            <div className="committee-page">
                <div className='committee-hero'>
                    <h1 className='committee-main-title'>Committees</h1>
                </div>
                <div>
                    {/* Fixed flexWrap prop */}
                    <Flex justifyContent='center' flexWrap='wrap' flexDirection='row'>
                        {division_keys}
                    </Flex>
                </div>
                <div>
                    {/* Fixed flexWrap prop */}
                    <Flex justifyContent='center' flexWrap='wrap' flexDirection='row'>
                        {committee_keys}
                    </Flex>
                </div>
                <div>
                    <Box width={[0.9, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='committee-description'>
                        <h1 className='division-title'>{committee_divisions[this.state.division].committees[this.state.committee].name}</h1>
                        <Box width={[1, .75]} mx='auto' >
                            <Image key={committee_divisions[this.state.division].committees[this.state.committee].image}
                                   src={committee_divisions[this.state.division].committees[this.state.committee].image} />
                        </Box>
                        <div dangerouslySetInnerHTML={{ __html: committee_divisions[this.state.division].committees[this.state.committee].description }}></div>
                    </Box>
                    {
                        (committee_divisions[this.state.division].committees[this.state.committee].heads.length > 0)
                            ? <h2 className='committee-subtitle'>Committee Heads</h2>
                            : null
                    }
                    <Cards content={committee_divisions[this.state.division].committees[this.state.committee].heads} minHeight="110px" width={240} />
                </div>
            </div>
        )
    }
}