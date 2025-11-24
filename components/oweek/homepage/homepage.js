import React from 'react';
import { Box, Flex, Image } from 'rebass';
var countdown = require('countdown');
import ImageCarousel from '../../general/ImageCarousel';
import '../oweek.css';

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: countdown(new Date(2026, 7, 17)).toString(),
        }; //pls make it countdown to August 17, 2026 which is move-in day
        this.updateTime = this.updateTime.bind(this);
    }

    updateTime() {
        this.setState({ time: countdown(new Date(2026, 7, 17)).toString() });
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

const oweekCarouselImages = [
    {
        src: '../../../static/oweek/2025coords.JPG',
        alt: '2025 O-Week Coordinators',
        caption: 'Meet Your 2025 O-Week Coordinators!',
        description: 'Leading you through an unforgettable week'
    },
    {
        src: '../../../static/oweek/arrival.jpg',
        alt: 'O-Week Arrival',
        caption: 'O-Week Arrival Day',
        description: 'Experience the magic of McMurtry traditions'
    },
    {
        src: '../../../static/oweek/welcome.png',
        alt: 'O-Week Welcome',
        caption: 'Welcome to Your New Home',
        description: 'Where lifelong friendships begin'
    },
    {
        src: '../../../static/oweek/cardmovin.jpg',
        alt: 'Moving In',
        caption: 'Move-In Day',
        description: 'Your journey at McMurtry starts here'
    },
    {
        src: '../../../static/oweek/building.jpg',
        alt: 'McMurtry Building',
        caption: 'McMurtry College',
        description: 'Your home away from home'
    },
    {
        src: '../../../static/oweek/whatisoweek.png',
        alt: 'What is O-Week',
        caption: 'What is O-Week?',
        description: 'A week of bonding, fun, and Rice traditions'
    }
];

const Homepage = () => (
    <div className='oweek-homepage'>
        <div className='oweek-hero'>
            <h1 className='oweek-main-title'>Welcome to McMurtry!</h1>
            <h2 className='oweek-subtitle-hero'>PicassO-Week 2025</h2>
            <div className='oweek-countdown-hero'>
                <Countdown />
            </div>
        </div>
        
        <ImageCarousel images={oweekCarouselImages} autoplay={true} />
        
        <div className='oweek-info-section'>
            <div className='oweek-info-card'>
                <h3>What is O-Week?</h3>
                <p>
                    Orientation Week (O-Week) is an exciting introduction to life at Rice University 
                    and McMurtry College. Led by our dedicated O-Week coordinators and advisors, 
                    you'll participate in fun activities, college traditions, and bonding experiences 
                    that will help you make lifelong friends and feel at home.
                </p>
            </div>
            
            <div className='oweek-info-card'>
                <h3>What to Expect</h3>
                <p>
                    From icebreakers and team-building activities to exploring campus and learning 
                    about Rice traditions, O-Week is packed with memorable moments. You'll meet your 
                    college family, discover resources, and prepare for your academic journey—all 
                    while having an incredible time!
                </p>
            </div>
        </div>
    </div>
);

export default Homepage;
