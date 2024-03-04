import React from 'react';
import { Box } from 'rebass';
import Title from '../../general/title';
import './workorder.css';


const WorkOrder = () => (
    <div className='workorder-page'>
        <Title width={320} title="Work Order" />
        <Box width={[0.8, 0.5]} ml='auto' mr='auto'>
            <p>To complete a work order, please email work@rice.edu with your name and phone number, 
            residential college and room number,
            and a description of the problem and a photo if applicable.</p>
        </Box>     
    </div>
)

export default WorkOrder;
