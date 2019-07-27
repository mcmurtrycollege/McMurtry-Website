import { Parallax } from 'react-parallax';
import Link from 'next/link';
import { Box, Flex, Image } from 'rebass';
import './homepage.css';
import Events from '../event/events';

const MCM10 = () => (
    <div>
        <Parallax bgImage='../../../static/mcm10bg.svg' bgImageAlt='' strength={800}>
            <div className='parallax-wrapper'>
                <div className='mcm10-title' style={{ animation: "reveal1 5s 1" }}>
                    <Image src='../../../static/mcm10.svg' alt="MCM10" />
                </div>
                <div className='mcm10-tiles'>
                    <Flex justifyContent='center' flexDirection='row' flexWrap='wrap'>
                        <div className='mcm10-tile' style={{ animation: "reveal2 5s 1" }}>
                            <Box className='mcm10-btn'>
                                <p>Get Tickets</p>
                            </Box>
                        </div>
                        <div className='mcm10-tile' style={{ animation: "reveal3 5s 1" }}>
                            <Image src="../../../static/mcm_commons.jpg" alt='' />
                        </div>
                        <div className='mcm10-tile' style={{ animation: "reveal4 5s 1" }}>
                            <Image src="../../../static/reserve.jpg" alt='' />
                        </div>
                        <div className='mcm10-tile' style={{ animation: "reveal5 5s 1" }}>
                            <Link href='/mcm10/sponsor'>
                                <Box className='mcm10-btn'>
                                    <p>Become a Sponsor</p>
                                </Box>
                            </Link>
                        </div>
                    </Flex>
                </div>
            </div>
        </Parallax>
        <Events />
        <Link href='/mcm10/faqs'>
            <div className='faqs-btn'>
                <p>FAQs</p>
            </div>
        </Link>
    </div>
)

export default MCM10