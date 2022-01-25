import React from 'react';
import Title from '../../general/title';
import './workorder.css';


const WorkOrder = () => (
    <div className='workorder-page'>
        <Title width={320} title="Work Order" />
        <div className='wide-workorder-form'>

            "To complete a work order, please email work@rice.edu with the following information:
                - Your Name and phone number
                - Residential College and Room Number
                - Description of the problem and a photo if applicable"
                
        </div>
    </div>
)

export default WorkOrder;
