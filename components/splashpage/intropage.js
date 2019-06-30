import React from 'react';
import { Box, Flex, Image } from 'rebass';
import Title from '../general/title';
import Link from 'next/link';
import './intropage.css';

const quickLinks = [
    {
        name: "Calendar",
        icon: "https://icon.now.sh/event",
        to: "/events/"
    },
    {
        name: "O-Week",
        icon: "https://icon.now.sh/people",
        href: "https://mcmurtryoweek.wixsite.com/home-page"
    },
    {
        name: "Book a Room",
        icon: "https://icon.now.sh/event_note",
        to: "/roomreservations/"
    },
    {
        name: "Contact",
        icon: "https://icon.now.sh/question_answer",
        to: "/contact/"
    }
]

const Intro = () => (
    <div className='intro-page'>
        <Box width={[0.95, 0.8]} className='yurt-graphic'>
            <Image src='../../static/YurtTrees.svg' />
        </Box>
        <Title width={[300, 450]} title='Welcome to McMurtry'/>
        <Flex justifyContent='center' flexWrap='wrap' flexDirection='row' >
            {
                quickLinks.map(({ name, icon, href, to }) => (
                    href === undefined ? (

                        <Box className='quick-link-container' width={[130, 220]} key={`${name}`}>
                            <Link href={to}>
                                <div className='quick-link'>
                                    <img src={`${icon}/DCDFE5/70`} alt='' className='intro-link-img-large' />
                                    <img src={`${icon}/DCDFE5/45`} alt='' className='intro-link-img-small' />
                                    <h2 className='quick-link-name'>{name}</h2>
                                </div>
                            </Link>
                        </Box>

                    ) : (

                            <Box className='quick-link-container' width={[130, 220]} key={`${name}`}>
                                <a href={href} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                    <div className='quick-link'>
                                        <img src={`${icon}/DCDFE5/70`} alt='' className='intro-link-img-large' />
                                        <img src={`${icon}/DCDFE5/45`} alt='' className='intro-link-img-small' />
                                        <h2 className='quick-link-name'>{name}</h2>
                                    </div>
                                </a>
                            </Box>
                        )
                ))

            }
        </Flex>
    </div>
)

export default Intro;