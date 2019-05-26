import React from 'react';
import { Box, Flex } from 'rebass';
import { advisors } from './divisionaladvisors.json';
import Title from '../../../title';
import './divisionaladvisors.css';

class DivisionalAdvisor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closed: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ closed: !this.state.closed })
    };

    render() {
        let cardStyle = {};
        let dropdownStyle = {};
        cardStyle.backgroundColor = !this.state.closed ? ('#BFBFCC') : ('#DCDFE5')
        dropdownStyle.maxHeight = this.state.closed ? ('0') : ('1000px')
        return (
            <div>
                <Box width={1}>
                    <div className="advisor-card" onClick={this.handleClick} style={cardStyle}>
                        <h2 className='advisor-name'>
                            {this.props.name}
                        </h2>
                        <h2 className='advisor-school'>{this.props.school}</h2>
                        <div style={dropdownStyle} className='divisional-advisor-dropdown'>
                            <p className='advisor-bio'>
                                {this.props.bio}
                            </p>
                        </div>
                    </div>
                </Box>
            </div>
        )
    }
}

const DivisionalAdvisors = () => {

    let cols = [[], []]

    for (let i = 0; i < advisors.length; i++) {
        cols[i % 2].push(
            <DivisionalAdvisor key={advisors[i].name} name={advisors[i].name} school={advisors[i].school} bio={advisors[i].bio} />
        )
    }

    return (
        <div className='divisional-advisors-page'>
            <Title width={350} title="Divisional Advisors" />
            <div>
                <Flex flexDirection='row' justifyContent='center' flexWrap='wrap'>
                    {
                        cols.map(column => (
                            <Box width={[0.9, 0.4]} className='advisor-column' key={`C+${cols.indexOf(column)}`}>
                                <Flex flexDirection='column'>
                                    {column}
                                </Flex>
                            </Box>
                        ))
                    }
                </Flex>
            </div>
        </div>
    )
}

export default DivisionalAdvisors;