import Link from 'next/link';
import React from 'react';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';
import FAQs from '../faqs/faqs';
import { Box, Image } from 'rebass';
import './homepage.css';
import Events from '../event/events';
import { events } from '../event/events.json';
import { mcscottish } from '../event/mcscottish.json';

class MCM10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.setState({ loaded: true });
    }

    componentWillUnmount() {
        this.setState({ loaded: false })
    }

    render() {
        return (
            <div>
                <Element name="home">
                    <div>
                        <Box width={[0.8, 0.6]} ml='auto' mr='auto' mt={50}>
                            <Image src="/static/mcm10/mcm10.svg" />
                        </Box>
                        <Box width={[0.8, 0.6]} ml='auto' mr='auto' className='mcm10-message'>
                            <p>Dear McMurtry Students, Alums, Affiliates, and Families,</p>
                            <p>We are exited to invite you to the McMurtry College 10th Anniversary celebration! Come join us on November 1st to enjoy McMurtry's vibrant community and experience our college's traditions while reveling in fun activities and great food.</p>
                            <p>As part of our commitment to continuing McMurtry's ability to provide for comfort and happiness to all members of our community we are soliciting donations to help fund the event, with all leftover funds going to the establishment of a McMurtry endowment that will be used to help students for years to come!</p>
                            <p>All of our sponsors will have the option to receive tickets to the event (for more information check out the <Link href="/10/sponsor">sponsorship page</Link>). For others interested in attending the event, you can purchase tickets below.</p>
                            <p>Please RSVP by October 25th.  We look forward to seeing you this Fall!</p>
                        </Box>
                        <div className='parallax-scaler'>
                            <Parallax bgImage='/static/mcm_commons.jpg' strength={400} bgImageAlt=""
                                renderLayer={percentage => {
                                    if (this.state.loaded) {
                                        window.document.getElementById("sponsor").style.opacity = percentage + 0.5;
                                    }
                                }}>
                                <div className="mcm10-link" id="sponsor">
                                    <Link href='/10/sponsor'>
                                        <h1>Become a Sponsor</h1>
                                    </Link>
                                </div>
                            </Parallax>
                        </div>
                        <div className='parallax-scaler'>
                            <Parallax bgImage='/static/mcm10/yurt.jpg' strength={400} bgImageAlt=""
                                renderLayer={percentage => {
                                    if (this.state.loaded) {
                                        window.document.getElementById('tickets').style.opacity = percentage + 0.5;
                                    }
                                }}>
                                <div className="mcm10-link" id='tickets'>
                                    <a href='https://riceconnect.rice.edu/events/2019/mcmurtry-10th-anniversary-celebration' style={{ textDecoration: 'none' }}>
                                        <h1>Get Tickets</h1>
                                    </a>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </Element>
                <Element name='schedule'>
                    <Events events={events} title="Schedule" />
                    <Events events={mcscottish} title="McScottish Night" />
                </Element>
                <Element name='memories'>
                    <div className='survey-desktop'>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSclr5oUyZeIAxm4AjfQdnKsrY0riUKTgoC70kTHezbSWKDAtw/viewform?embedded=true" width="700" height="1155" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </div>
                    <div className='survey-mobile'>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSclr5oUyZeIAxm4AjfQdnKsrY0riUKTgoC70kTHezbSWKDAtw/viewform?embedded=true" width="350" height="1400" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </div>
                </Element>
                <Element name='faqs'>
                    <FAQs />
                </Element>
                <Element name='register'>
                    <div className='survey-desktop'>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdKZQt5Hp2XtouRxykhsfdl4t8rwo6wnctRgrWi_h7AEMumBg/viewform?embedded=true" width="700" height="864" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </div>
                    <div className='survey-mobile'>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdKZQt5Hp2XtouRxykhsfdl4t8rwo6wnctRgrWi_h7AEMumBg/viewform?embedded=true" width="350" height="1100" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </div>
                </Element>
                <Element name='contact'>
                    <h1 className='contact-section-title'>Contact</h1>
                        <h2 className='mcm10-contact'>If you have any questions reach out to Jackie Carrizales at <a href="mailto:mcmurtry@rice.edu">mcmurtry@rice.edu</a> or call (713) 348-4583</h2>
                </Element>
            </div>
        )
    }
}

export default MCM10