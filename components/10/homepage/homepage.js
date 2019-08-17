import Link from 'next/link';
import { Parallax } from 'react-parallax';
import { Box, Flex, Image } from 'rebass';
import './homepage.css';
import Events from '../event/events';

const MCM10 = () => (
    <div>
        <div>
            <Box width={[0.8, 0.6]} ml='auto' mr='auto' mt={50}>
                <Image src="/static/mcm10/mcm10.svg" />
            </Box>
            <div className='parallax-scaler'>
                <Parallax bgImage='/static/mcm10/yurt.jpg' strength={400} bgImageAlt=""
                    renderLayer={percentage => (
                        <div className='mcm10-link-bg' style={{
                            opacity: 1.5 * percentage + 0.3,
                            width: percentage * 150 + 150,
                            height: percentage * 100 + 50
                        }} />
                    )}>
                    <div className="mcm10-link">
                        <h1>Get Tickets</h1>
                    </div>
                </Parallax>
            </div>
            <div className='parallax-scaler'>
                <Parallax bgImage='/static/mcm_commons.jpg' strength={400} bgImageAlt=""
                    renderLayer={percentage => (
                        <div className='mcm10-link-bg' style={{
                            opacity: 1.5 * percentage + 0.3,
                            width: percentage * 150 + 300,
                            height: percentage * 100 + 50
                        }} />
                    )}>
                    <div className="mcm10-link">
                        <Link href='/mcm10/sponsor'>
                            <h1>Become a Sponsor</h1>
                        </Link>
                    </div>
                </Parallax>
            </div>
        </div>
        <Events />
        <Link href='/mcm10/faqs'>
            <div className='faqs-btn'>
                <p>FAQs</p>
            </div>
        </Link>
    </div>
)

export default MCM10