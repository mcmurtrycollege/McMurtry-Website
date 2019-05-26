import React from 'react';
import { Box } from 'rebass';
import Title from '../../../title';
import './equipmentrequest.css';


const EquipmentRequest = () => (
    <div className='equipment-request-page'>
        <Title width={270} title="Equipment Request" />
        <a href='mailto:mcmurtrytech@gmail.com' className='tech-request-link'>
            <Box width={300} ml='auto' mr='auto' className='tech-request'>
                <p>
                    Please direct all technology and equipment requests to mcmurtrytech@gmail.com.
                </p>
            </Box>
        </a>
    </div>
)

export default EquipmentRequest;
