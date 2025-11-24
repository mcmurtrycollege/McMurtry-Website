import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { smr } from './smr.json';
import './smr.css';

const SMR = () => (
    <div className='smr-page'>
        <div className='smr-hero'>
            <h1 className='smr-main-title'>Student Maintenance Rep</h1>
        </div>
        
        <Box width={[0.9, 0.8]} mx='auto' className='smr-container'>
            <Flex flexWrap='wrap' alignItems='center' justifyContent='center'>
                {/* Image Section */}
                <Box width={[1, 0.4]} p={3} className='smr-image-container'>
                    <Image src={smr[0].image} alt={smr[0].name} className='smr-image' />
                </Box>
                
                {/* Content Section */}
                <Box width={[1, 0.6]} p={4} className='smr-info'>
                    <h2 className='smr-name'>{smr[0].name}</h2>
                    <a href={`mailto:${smr[0].email}`} style={{ textDecoration: 'none' }}>
                        <h4 className='smr-email'>
                            <img src="../../static/icons/email.svg" alt="Email" />
                            {smr[0].email}
                        </h4>
                    </a>
                    <div className='smr-bio'>
                        {smr[0].body}
                    </div>
                </Box>
            </Flex>
        </Box>
    </div>
)

export default SMR;