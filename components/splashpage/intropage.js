import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Link from 'next/link';
// import Banner from '../10/banner/banner';
import './intropage.css';

const iconFolder = '../../static/icons/'
const quickLinks = [
    {
        name: "Calendar",
        icon: "calendar",
        to: "/events/calendar",
        absolute: ""
    },
    {
        name: "O-Week",
        icon: "people",
        // href: "https://mcmurtryoweek.wixsite.com/home-page"
        to: "/oweek",
        absolute: ""
    },
    {
        name: "Book a Room",
        icon: "event",
        to: "/resources/roomreservations/",
        absolute: ""
    },
    {
        name: "Financial Inclusivity",
        icon: "hand-heart",
        to: "/about/financialinclusivity",
        absolute: ""
    },
    {
        name: "Donate",
        icon: "hand-coin",
        to: "",
        absolute: "https://riceconnect.rice.edu/donation/mcmurtry-college"
    }
]

const Intro = () => (
    <div className='intro-page'>
        {/* <Banner /> */}
        {/* <Link href={"/resources/coronavirus"}>
            <Box className="coronavirus-banner" width={[0.9, 0.5]}>
                <p>Click here for Resources and Questions regarding the coronavirus response at Rice/McMurtry</p>
            </Box>
        </Link> */}
        <Link href={"/resources/BlackLivesMatter"}>
            <Box className="blm-banner" width={[0.9, 0.5]}>
                <p>McMurtry College stands with the Black Lives Matter movement &#8594;</p>
            </Box>
        </Link>
        <Box width={[0.95, 0.8]} className='yurt-graphic'>
            <Image src='../../static/YurtTrees.svg' />
        </Box>
        <h1 className='welcome-title'>Welcome to McMurtry!</h1>
        <Box className="turbovote-banner" width={[0.9, 0.5]}>
            <a href="https://rice.turbovote.org/">
                <Image src='../../static/rice_votes.png' />
            </a>
            <p>
                TurboVote makes sure you always know when elections are happening and have the information you need
                to vote with confidence. Launched in 2010 by the nonpartisan nonprofit Democracy Works, TurboVote
                is an online voter platform that helps you start the voter registration process, request a ballot
                by mail, and sign up for email and text reminders for upcoming election deadlines, all in less
                than five minutes.
            </p>
            {/* <p>
                Through a partnership with the Rice University Center for Civic Leadership, Rice students can opt
                to receive voter registration forms and ballot request applications through TurboVote in pre-paid,
                pre-addressed envelopes.
            </p> */}
            <a href="https://rice.turbovote.org/">
                <Box className='turbovote-signup'>Sign up today!</Box>
            </a>
        </Box>
        <Flex justifyContent='center' flexWrap='wrap' flexDirection='row' >
            {
                quickLinks.map(({ name, icon, to, absolute }) => (
                    <Box className='quick-link-container' width={[130, 220]} key={`${name}`}>
                        {
                            to !== "" ? (
                                <Link href={to}>
                                    <div className='quick-link'>
                                        {/* <img src={`${icon}/DCDFE5/70`} alt='' className='intro-link-img-large' />
                                        <img src={`${icon}/DCDFE5/45`} alt='' className='intro-link-img-small' /> */}
                                        <img src={`${iconFolder}${icon}-large.svg`} alt='' className='intro-link-img-large' />
                                        <img src={`${iconFolder}${icon}-small.svg`} alt='' className='intro-link-img-small' />
                                        <h2 className='quick-link-name'>{name}</h2>
                                    </div>
                                </Link>
                            ) : (
                                <a href={absolute} target="_blank" rel="noopener noreferrer">
                                    <div className='quick-link'>
                                        {/* <img src={`${icon}/DCDFE5/70`} alt='' className='intro-link-img-large' />
                                        <img src={`${icon}/DCDFE5/45`} alt='' className='intro-link-img-small' /> */}
                                        <img src={`${iconFolder}${icon}-large.svg`} alt='' className='intro-link-img-large' />
                                        <img src={`${iconFolder}${icon}-small.svg`} alt='' className='intro-link-img-small' />
                                        <h2 className='quick-link-name'>{name}</h2>
                                    </div>
                                </a>
                            )
                        }
                        
                    </Box>
                ))

            }
        </Flex>
    </div>
)

export default Intro;