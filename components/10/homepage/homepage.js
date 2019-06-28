import { Parallax } from 'react-parallax';
import Link from 'next/link';
import { Image } from 'rebass';
import './homepage.css';
import Events from '../event/events';

const MCM10 = () => (
    <div>
        <Parallax bgImage='../../../static/mcm10bg.svg' bgImageAlt='' strength={800}>
            <div className='parallax-wrapper1'>
                <div className='mcm10-title-container'>
                    <div className='mcm10-title'>
                        <Image src='../../../static/mcm10.svg' alt="MCM10" />
                    </div>
                </div>
                <div className='mcm10-btn'>
                    <p>Get Tickets</p>
                </div>
                <Link href='/mcm10/sponsor'>
                    <div className='mcm10-btn'>
                        <p>Become a Sponsor</p>
                    </div>
                </Link>
            </div>
        </Parallax>
        <Events />
        <Link href='/mcm10/faqs'>
            <div className='faqs-btn'>
                <p>FAQs <img src="https://icon.now.sh/arrow/DCDFE5/25"/></p>
            </div>
        </Link>
    </div>
)

export default MCM10