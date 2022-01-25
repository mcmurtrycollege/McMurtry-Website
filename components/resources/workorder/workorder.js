import React from 'react';
import Title from '../../general/title';
import './workorder.css';


const WorkOrder = () => (
    <div className='workorder-page'>
        <Title width={320} title="Work Order" />
        <div className='wide-workorder-form'>
            "To complete a work order, please email work@rice.edu with your name and phone number, 
            residential college and room number,
            and a description of the problem and a photo if applicable."
        </div>
      
    </div>
)

export default WorkOrder;
