import React from 'react';
import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';
import { Box, Image } from 'rebass';
import '../oweek.css';
import './groups.css';
import { oweek_groups } from './groups.json';

class GoTop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll() {
        this.setState({ show: (window.scrollY > document.getElementById('top-content').clientHeight) })
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll)
    }
    render() {
        return (
            this.state.show ? (
                <Scroll.Link to='top' smooth={true} duration={400}>
                    <div className='toplink'>
                        Top
                    </div>
                </Scroll.Link>
            ) : (
                    <p></p>
                )
        )
    }
}

const whatIsGroupContent = [
    "Your O-Week group consists of 10-14 New Students and 4-5 upperclassmen Advisors (one will be a Co-Advisor and one may be an Affiliate) who are beyond excited to welcome you to the best residential college on campus! All throughout O-Week, you will be preparing for registration and academic life at Rice and interacting with the rest of your incoming class at McMurtry, but your O-Week group is designed primarily to give you more of a personal support system during the week and throughout the year. From playing crazy ice-breakers, learning about each other's interests and passions, sharing possible course schedules, or having late movie nights, you will soon discover that your bond as an O-Week group runs deep. Be prepared for lots of fun & encouragement from the peers in your group. Don't be worried if your Advisors seem very enthusiastic when you drive up for move in day -- it's a sign of affection."
];

const whatIsAdvisorContent = [
    "Advisors are a diverse group of students from McMurtry who are so enthusiastic about welcoming you to Rice that they don't mind returning here almost two full weeks before classes start to help you move in and start your time at Rice! These fantastic people have been hand-selected to act as your guides throughout O-Week; they'll make sure you get to all activities and meetings, answer any questions you might have (or direct you to someone who can answer them), expose you to Rice's academics and student life, introduce you to the McMurtry culture, and serve as all-around resources. One thing that all Advisors have in common is their desire to help you have the best experience possible at Rice, so they'll continue to be resources for you long after O-Week is over and may very well become some of your closest friends."
];

const whatIsCoAdvisorContent = [
    "Co-Advisors make up about a fourth of our team and are students who are equally friendly and enthusiastic about welcoming you to Rice, but they hail from other residential colleges! Co-Advisors love McMurtry so much that they choose to join McMurtry's O-Week as an ambassador of their home college. In addition to having the qualities of an Advisor, they can help show you Rice beyond the beautiful wood-panels of McMurtry and bring a little bit of their own college's culture and customs along with them. They are wonderful resources in helping you to branch out and explore other colleges!"
];

const whatIsAffiliateContent = [
    "Affiliates are O-Week personnel who serve specific roles designed to help you with your transition to Rice. Most O-Week groups will have at least one Affiliate. While they are paired with individual groups, they are an important resource for all New Students at the college. The Affiliate assigned to your group may often be floating around to meet other students and providing them with specialized knowledge and advice. Be sure to meet all the Affiliates present, as they are incredibly important campus-wide resources during O-Week and beyond. These Affiliate positions include: Peer Academic Advisors, Diversity Facilitators, Photographer, Videographer, Gopher, Rice Health Advisor, Associates Liaison, Athletic Liaison, Student Maintenance Representative, Chief Justice, and President."
];

const Groups = () => (
    <div className='oweek-page'>
        <div className='oweek-hero'>
            <h1 className='oweek-main-title'>The O-Week Groups</h1>
        </div>

        <div id='top-content'>
            <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[0, 0]}>
                <h2 className='section-title'>What is an O-Week Group?</h2>
                {whatIsGroupContent.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </Box>

            <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[20, 50]}>
                <h2 className='section-title'>What is an Advisor?</h2>
                {whatIsAdvisorContent.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </Box>

            <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[20, 50]}>
                <h2 className='section-title'>What is a Co-Advisor?</h2>
                {whatIsCoAdvisorContent.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </Box>

            <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[20, 50]}>
                <h2 className='section-title'>What is an Affiliate?</h2>
                {whatIsAffiliateContent.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </Box>

            <Element name='top'>
                <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[20, 50]}>
                    <h2 className='section-title'>Find Your O-Week Group!</h2>
                </Box>
            </Element>
            
            <div className='oweek-groups-links'>
                {
                    oweek_groups.map(({ name }) => (
                        <Scroll.Link to={name} smooth={true} duration={400} key={name}>
                            <div className='oweek-group-link'>
                                {name}
                            </div>
                        </Scroll.Link>
                    ))
                }
            </div>
        </div>
        <div className='oweek-groups'>
            {
                oweek_groups.map(({ name, image }) => (
                    <Element name={name} key={name}>
                        <div className='oweek-group'>
                            <h2 className='oweek-title'>{name}</h2>
                            <Box width={0.7} ml='auto' mr='auto' style={{ marginTop: '1%', marginBottom: '3%' }}>
                                <Image src={image} alt='Error Loading Image' />
                            </Box>
                        </div>
                    </Element>
                ))
            }
        </div>
        <GoTop />
    </div>
)

export default Groups;