import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Title from '../../../title';
import './associates.css';
import associates from './associates_content';

class AssociateCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { contentVisible: false }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ contentVisible: !this.state.contentVisible })
    }

    render() {
        let cardStyle = {}
        let dropdownStyle = {}
        let dropdownImageStyle = {}
        cardStyle.backgroundColor = this.state.contentVisible ? ('#BFBFCC') : ('#DCDFE5')
        dropdownStyle.maxHeight = this.state.contentVisible ? ('650px') : ('0')
        dropdownImageStyle.maxHeight = this.state.contentVisible ? ('0') : ('300px')

        return (
            <Box width={1} onClick={this.handleClick}>
                <div className='associate-card' style={cardStyle}>
                    <div className='associate-image-dropdown' style={dropdownImageStyle}>
                        <Box className='associate-image' width={[0.8, 0.5]}>
                            <Image src={this.props.image} alt='' />
                        </Box>
                    </div>
                    <h2 className='associate-name'>{this.props.name}</h2>
                    <div style={dropdownStyle} className='associate-dropdown'>
                        <p><strong>Career/Profession: </strong>{this.props.career}</p>
                        <p><strong>Bio: </strong>{this.props.bio}</p>
                        <p><strong>Favorite Movie/TV Show: </strong>{this.props.movie_tv}</p>
                        <p><strong>Hobbies: </strong>{this.props.hobbies}</p>
                        <p><strong>Fun Fact: </strong>{this.props.fact}</p>
                    </div>
                </div>
            </Box>
        )
    }
}

const Associates = () => {
    let columns = [[], []];
    for (let i = 0; i < associates.length; i++) {
        columns[i % 2].push(
            <AssociateCard key={`${associates[i].name}`} name={associates[i].name}
                career={associates[i].career} bio={associates[i].bio} movie_tv={associates[i].movie_tv}
                hobbies={associates[i].hobbies} fact={associates[i].fact} image={associates[i].image} />
        )
    }
    return (
        <div className='associates-page'>
            <Title title={'Associates'} width={240} smallText={false} />
            <Flex justifyContent='center' flexDirection='row' flexWrap='wrap' style={{ marginTop: '3%' }}>
                {
                    columns.map(column => (
                        <Flex flexDirection='column' width={[1, 0.35]} key={`C+${columns.indexOf(column)}`}>
                            {column}
                        </Flex>
                    ))
                }
            </Flex>
        </div>
    )
}

export default Associates;