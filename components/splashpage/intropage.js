import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Title from '../general/title';
import Link from 'next/link';
import './intropage.css';

const quickLinks = [
    {
        name: "Calendar",
        icon: "https://icon.now.sh/event",
        to: "/events/calendar"
    },
    {
        name: "O-Week",
        icon: "https://icon.now.sh/people",
        // href: "https://mcmurtryoweek.wixsite.com/home-page"
        to: "/oweek"
    },
    {
        name: "Book a Room",
        icon: "https://icon.now.sh/event_note",
        to: "/resources/roomreservations/"
    },
    {
        name: "Financial Inclusivity",
        icon: "https://icon.now.sh/public",
        to: "/about/financialinclusivity"
    }
]

const Intro = () => (
    <div className='intro-page'>
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
                                <img src={`${icon}/DCDFE5/70`} alt='' className='intro-link-img-large' />
                                <img src={`${icon}/DCDFE5/45`} alt='' className='intro-link-img-small' />
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