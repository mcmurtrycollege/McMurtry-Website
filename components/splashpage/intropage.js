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
        to: "/events/calendar"
    },
    {
        name: "O-Week",
        icon: "people",
        // href: "https://mcmurtryoweek.wixsite.com/home-page"
        to: "/oweek"
    },
    {
        name: "Book a Room",
        icon: "event",
        to: "/resources/roomreservations/"
    },
    {
        name: "Financial Inclusivity",
        icon: "hand-heart",
        to: "/about/financialinclusivity"
    }
]

const Intro = () => (
    <div className='intro-page'>
        {/* <Banner /> */}
        <Link href={"/resources/coronavirus"}>
            <Box className="coronavirus-banner" width={[0.9, 0.5]}>
                <p>Click here for Resources and Questions regarding the coronavirus response at Rice/McMurtry</p>
            </Box>
        </Link>
        <Box width={[0.95, 0.8]} className='yurt-graphic'>
            <Image src='../../static/YurtTrees.svg' />
        </Box>
        <h1 className='welcome-title'>Welcome to McMurtry!</h1>
        <Flex justifyContent='center' flexWrap='wrap' flexDirection='row' >
            {
                quickLinks.map(({ name, icon, to }) => (
                    <Box className='quick-link-container' width={[130, 220]} key={`${name}`}>
                        <Link href={to}>
                            <div className='quick-link'>
                                {/* <img src={`${icon}/DCDFE5/70`} alt='' className='intro-link-img-large' />
                                <img src={`${icon}/DCDFE5/45`} alt='' className='intro-link-img-small' /> */}
                                <img src={`${iconFolder}${icon}-large.svg`} alt='' className='intro-link-img-large' />
                                <img src={`${iconFolder}${icon}-small.svg`} alt='' className='intro-link-img-small' />
                                <h2 className='quick-link-name'>{name}</h2>
                            </div>
                        </Link>
                    </Box>
                ))

            }
        </Flex>
    </div>
)

export default Intro;