import { Parallax } from 'react-parallax';
import { Box, Image } from 'rebass';
import './homepage.css';
import FlipCard from '../flip/flip';

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
                <div className='mcm10-btn'>
                    <p>Become a Sponsor</p>
                </div>
            </div>
        </Parallax>

        <div className='parallax-wrapper2'>
            <h1>MCM10</h1>
        </div>
    </div>
)

export default MCM10