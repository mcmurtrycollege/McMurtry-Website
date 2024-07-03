import React from 'react';
import { Box, Flex, Image } from 'rebass';
var countdown = require('countdown');
import '../oweek.css';

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: countdown(new Date(2024, 7, 18)).toString(),
        };
        this.updateTime = this.updateTime.bind(this);
    }

    updateTime() {
        this.setState({ time: countdown(new Date(2024, 7, 18)).toString() });
    }

    componentDidMount() {
        this.myInterval = window.setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render() {
        return (
            <div className='oweek-countdown'>
                <h3>{this.state.time}</h3>
                <h2>until O-Week!</h2>
            </div>
        );
    }
}

const Homepage = () => (
    <div className='oweek-homepage'>
        <Flex flexDirection='row' justifyContent='center' flexWrap='wrap'>
            <Box width={[1, 1 / 3]}>
                <Image src='../../../static/oweek/mcscottishyurt.jpg' alt='' />
            </Box>
            <Box width={[1, 1 / 3]}>
                <Image src='../../../static/oweek/cardmovin.jpg' alt='' />
            </Box>
            <Box width={[1, 1 / 3]} style={{ backgroundColor: '#87799C', marginBottom: '4px' }}>
                <h1 className='oweek-welcome'>Welcome to McMurtry!</h1>
            </Box>
            <Box width={[1, 1 / 3]} style={{ backgroundColor: '#87799C', marginBottom: '4px' }}>
                <h1 className='oweek-welcome'>AstrO-Week</h1>
            </Box>
            <Box width={[1, 1 / 3]} style={{ margin: 0, padding: 0 }}>
                <Image src='../../../static/oweek/2024coords.JPG' alt='' />
            </Box>
            <Box width={[1, 1 / 3]}>
                <Image src='../../../static/oweek/welcome.png' alt='' />
            </Box>
            <Box width={[1, 1 / 3]} style={{ margin: 0, padding: 0 }}>
                <Image src='../../../static/oweek/whatisoweek.png' alt='' />
            </Box>
            <Box width={[1, 1 / 3]}>
                <Image src='../../../static/oweek/building.jpg' alt='' />
            </Box>
            <Box width={[1, 1 / 3]} style={{ backgroundColor: '#87799C', marginBottom: '4px' }}>
                <Countdown />
            </Box>
        </Flex>
    </div>
);

export default Homepage;
