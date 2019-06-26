import { Parallax } from 'react-parallax'

import './homepage.css';

const MCM10 = () => (
    <div>
        <Parallax bgImage='../../../static/reserve.jpg' bgImageAlt='' strength={300}>
            <div className='parallax-wrapper1'>
                <div className='mcm10-title-container'>
                    <div className='mcm10-title'>
                        <p>McMurtry 10th</p>
                        <p>Anniversary</p>
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