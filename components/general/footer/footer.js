import React from 'react';
import { Box, Flex, Image } from 'rebass';

import './footer.css';

const Footer = () => (
    <div className='footer-container'>
        {/* <Box width={[0.4, 0.3, 0.3, 0.2]} ml='auto' mr='auto'>
            <Image src='../../static/crest.svg' alt="McMurtry College" />
        </Box> */}
        <Flex flexDirection='row' justifyContent='center' className='footer-crest'>
            <Box width={40}>
                <Image src='../../../static/logo.svg' alt="" />
            </Box>
            <p>McMurtry College</p>
        </Flex>
        <p className='footer-item'>McMurtry College · MS 761 · Rice University</p>
        <p className='footer-item'>1605 Rice Blvd · Houston, TX 77005</p>
        <p className='footer-item'>Phone: (713) 348-4583 · Fax: (713) 348-3135</p>
        <p className='footer-item'>Email: mcmurtry@rice.edu</p>
        <p></p>
        <p className='footer-item'>Copyright © McMurtry College, 2019</p>
    </div>
)

export default Footer;