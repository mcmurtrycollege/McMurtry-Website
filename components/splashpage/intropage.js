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
        <h1 className='welcome-title'>Welcome to McMurtry!</h1>
        <Box width={[0.95, 0.8]} className='yurt-graphic'>
            <Image src='../../static/YurtTrees.svg' />
        </Box>
        <a href={"https://goo.gl/forms/KEyPplLhclljdSOm2"}>
            <Box className="accessibility-fund-banner" width={[0.9, 0.5]}>
                <p>McMurtry Magisters' Accessibility Fund &#8594;</p>
            </Box>
        </a>
        <a href={"https://docs.google.com/spreadsheets/d/14kvozYUheCTkH-QqxSWfO8OMQrILdgr7cW3wF2ePQJs/edit#gid=1352693617"}>
            <Box className="student-resources-banner" width={[0.9, 0.5]}>
                <p>Student/Academic Resources Spreadsheet &#8594;</p>
            </Box>
        </a>
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