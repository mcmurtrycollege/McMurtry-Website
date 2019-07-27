import React from 'react';
import { Box, Flex } from 'rebass';
import { advisors } from './divisionaladvisors.json';
import Title from '../../general/title';
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
        return (
            <Box width={[0.9, 0.8, 0.7, 0.6]}>
                <div className={this.state.closed ? "advisor-card-hidden" : "advisor-card-visible"} onClick={this.handleClick}>
                    <div className='advisor-card-content'>
                        <h1>{this.props.name}</h1>
                        <h2>School of {this.props.school}</h2>
                        <h4>Department of {this.props.department}</h4>
                        <h4>Email: {this.props.email}</h4>
                        <h4>Office: {this.props.office}</h4>
                    </div>
                    <div className={this.state.closed ? 'divisional-advisor-dropdown-hidden' : 'divisional-advisor-dropdown-visible'}>
                        <Box width={0.9} ml='auto' mr='auto'>
                            <p className='advisor-bio'>
                                {this.props.bio}
                            </p>
                        </Box>
                    </div>
                </div>
            </Box>
        )
    }
}

const DivisionalAdvisors = () => {
    return (
        <div className='divisional-advisors-page'>
            <Title width={350} title="Divisional Advisors" />
            <div>
                <Flex flexDirection='row' justifyContent='center' flexWrap='wrap'>
                    {
                        advisors.map(({ name, school, department, email, office, bio }) => (
                            <DivisionalAdvisor key={name} name={name} school={school} department={department} email={email} office={office} bio={bio} />
                        ))
                    }
                </Flex>
            </div>
        </div>
    )
}

export default DivisionalAdvisors;