import React from 'react';
import { Box, Image } from 'rebass';
import ImageCarousel from '../general/ImageCarousel';
// import Banner from '../10/banner/banner';
import './intropage.css';
import '../about/about/about.css';

const aboutContent = [
    "McMurtry College is the 10th residential college to grace the Rice University campus. A LEED Gold certified building located on the northeastern edge of campus, it sits at the optimal location for those seeking the shortest path between their dorms and some of the most popular locations on campus, such as the academic quad (home to many buildings in which students will most likely have classes), Duncan Hall (for all things engineering), and the West Servery (the best place to eat at Rice).",
    "McMurtry first opened its doors in the fall of 2009. The first generation of Murts numbered in the low seventies so Rice administration recruited some Will Rice College students to fill the remaining space. McMurtry survived the 'colonization' and the two groups have learned to coexist peacefully as sister colleges...until Beer Bike 2019.",
    "The college also boasts many fantastic amenities like a campfire pit in the middle of the quad, a wide roof with a lovely city view and a kitchen on every level. We affectionately call our commons the 'Yurt.' Other facilities include Burt's Teahouse and Deedee's Lounge on 5th floor, an off-campus student lounge, and the game room, music room, TV room, gym, and the McMurtry Innovation Space (MIS) on the 1st floor, with a plethora of study rooms throughout the college."
];

const burtDeedeeContent = [
    "Burt and Deedee McMurtry graduated from Rice University in 1956 and moved to the Bay Area in 1957 after Burt's fifth year at Rice. Burt received Bachelor of Arts and Bachelor of Science degrees in Electrical Engineering from Rice in 1956 and 1957, respectively. He continued his education at Stanford, where he earned a Master of Science and a doctoral degree in electrical engineering in 1959 and 1962, respectively. A Rice trustee emeritus, Burt McMurtry was a private investor and a founding partner of Technology Venture Investors and Institutional Venture Associates in California. His venture firms have backed such companies as KLA-Tencor, Adaptec, Altera, Compaq, Intuit, Linear Technology Corp. and Microsoft. Burt passed away on September 2nd, 2018 at his home in Palo Alto. Deedee McMurtry is an active volunteer, a trustee of the American Conservatory Theater (ACT) in San Francisco, and is involved with arts advisory committees at Stanford.",
    "Burt served seventeen years on the Rice University board, eleven years on the Stanford University board (the last four as chairman, ending July 1, 2008,) and seven years on the board of the Carnegie Institution of Washington. Burt played a role in planning the residential college system back when he was a student at Rice. He was a student representative on the 1955 committee that set out the original mission and basic organizational design of the residential colleges.",
    "The McMurtrys have a long history of support to Rice. They have established two endowed professorships and two endowed scholarships. The McMurtrys have also given to the Rice Annual Fund, the Class of 1956 Scholarship Fund and Anne and Charles Duncan Hall, where McMurtry Auditorium is named in their honor, in addition to many other areas of the campus."
];

const carouselImages = [
    {
        src: '../../static/oweek/building.jpg',
        alt: 'McMurtry College Building',
        caption: 'Your Home at Rice',
        description: 'Welcome to McMurtry College - where community thrives'
    },
    {
        src: '../../static/mcm_cohorts.jpg',
        alt: 'O-Week Welcome',
        caption: 'O-Week Traditions',
        description: 'Creating lifelong memories and friendships'
    },
    {
        src: '../../static/mcm_commons.jpg',
        alt: 'McMurtry Commons',
        caption: 'McMurtry Commons',
        description: 'The heart of our college community'
    },
    {
        src: '../../static/oweek/2025coords.JPG',
        alt: '2025 O-Week Coordinators',
        caption: '2025 O-Week Team',
        description: 'Our amazing O-Week coordinators'
    },
];

const Intro = () => (
    <div className='intro-page'>
        {/* <Banner /> */}
        <h1 className='welcome-title'>Welcome to McMurtry!</h1>
        <div className='yurt-graphic'>
            <Image width = {[ .95, .8 ]} src='../../static/YurtTrees.svg'/>
        </div>
        
        {/* Professional Image Carousel */}
        <ImageCarousel images={carouselImages} autoplay={true} />
        
        <div className='banner-container'>
            <a href={"https://goo.gl/forms/KEyPplLhclljdSOm2"} target="_blank" rel="noopener noreferrer">
                <Box className="accessibility-fund-banner">
                    <p>McMurtry Magisters' Accessibility Fund</p>
                </Box>
            </a>
            <a href={"https://docs.google.com/spreadsheets/d/14kvozYUheCTkH-QqxSWfO8OMQrILdgr7cW3wF2ePQJs/edit#gid=1352693617"} target="_blank" rel="noopener noreferrer">
                <Box className="student-resources-banner" >
                    <p>Student/Academic Resources Spreadsheet</p>
                </Box>
            </a>
        </div>
        
        <div className='donate-button-container'>
            <a href={"https://riceconnect.rice.edu/donation/support-mcmurtry-college"} target="_blank" rel="noopener noreferrer">
                <Box className="donate-banner">
                    <p>
                        <span className="donate-heart-left">♥</span>
                        Donate to McMurtry College
                        <span className="donate-heart-right">♥</span>
                    </p>
                </Box>
            </a>
        </div>
        
        {/* About McMurtry Section */}
        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[20, 50]}>
            <h2 className='section-title'>About McMurtry</h2>
            <Image src='../../static/mcm_commons.jpg' alt='' width={280} className='float-left-img' style={{ float: 'left', marginRight: '30px', marginBottom: '20px' }} />
            {aboutContent.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </Box>

        {/* Burt and Deedee Section */}
        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[20, 50]}>
            <h2 className='section-title'>Burt and Deedee McMurtry</h2>
            <Image src='../../static/burt_deedee.jpg' alt='' width={260} className='float-right-img' style={{ float: 'right', marginLeft: '30px', marginBottom: '20px' }} />
            {burtDeedeeContent.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </Box>

        {/* Location Map */}
        <Box className='map-section' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[20, 50]}>
            <h2 className='section-title'>Find Us at Rice</h2>
            <div className='map-container'>
                <iframe
                    src="https://maps.google.com/maps?q=29.7204139,-95.3977558&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: '16px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="McMurtry College Location"
                ></iframe>
            </div>
            <div className='map-directions-container'>
                <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=29.7204139,-95.3977558&destination_place_id=ChIJO3ubx34MQIYRTzQzdE24dHY" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-directions-btn"
                >
                    <span className="directions-icon">📍</span>
                    Get Directions
                </a>
            </div>
        </Box>
    </div>
)

export default Intro;