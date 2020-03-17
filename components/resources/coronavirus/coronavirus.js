import React from 'react';
import { Box } from 'rebass';
import Title from '../../general/title';
import './coronavirus.css';
import content from './content.js';

const Coronavirus = () => {

    let faqs = [];

    for (let i = 0; i < content.length; i++) {
        faqs.push((
            <div>
                <div style={{ textAlign: 'center' }}>
                    <p className='covid-question'>{i + 1}. {content[i].question}</p>
                </div>
                <p className='covid-answer'>{content[i].answer}</p>
            </div>
        ))
    }

    return (
        <div className='coronavirus-page'>
            <Title title="McMurtry COVID-19 FAQs" width={[300, 500]} />
            <Box className='covid-message' width={[0.9, 0.55]} ml='auto' mr='auto'>
                <p>Hey McMurtry!</p>
                <p>As you know, Rice students living on campus have been asked to vacate the campus by March 25th, unless they petition and receive special consideration from Dean Gorman. Students are strongly urged to leave campus as soon as arrangements can be made. To complement the information you are receiving from the administration, the McTeam created this FAQ that addresses some of your questions regarding the move-out process at McMurtry.</p>
                <p>Petitions to stay on campus were due on 3/15, so the deadline has passed. If special circumstances have come up since then, please contact Margaret at beier@rice.edu. </p>
                <p>Murt Love!</p>
                <p>The McTeam</p>
            </Box>
            <Box className="covid-subtitle">
                <p>Quick Links</p>
            </Box>
            <div className='covid-quick-links'>
                <p><a href="https://www.google.com/url?q=https://forms.gle/fRJt9AgJMwQFGcif6&sa=D&ust=1584139514566000&usg=AFQjCNGcJYyedOD--DNa6s8nmOT_ljXAuQ">McMurtry Move Out Form</a></p>
                <p><a href="https://riceuniversity.co1.qualtrics.com/jfe/form/SV_eKDTQqSH7z2f41f">Financial Burder Relief Form</a></p>
                <p><a href="https://emergency.rice.edu/coronavirus-faq">Rice Emergency Services</a></p>
            </div>

            <Box className="covid-subtitle">
                <p>FAQs</p>
            </Box>
            <Box className="covid12-faqs" ml='auto' mr='auto' width={[0.9, 0.55]}>
                {faqs}
            </Box>
        </div >
    )
}

export default Coronavirus;