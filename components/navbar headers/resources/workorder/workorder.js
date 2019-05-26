import React from 'react';
import Title from '../../../title';
import './workorder.css';


const WorkOrder = () => (
    <div className='workorder-page'>
        <Title width={320} title="Work Order" />
        <div className='wide-workorder-form'>
            <iframe src="https://www.emailmeform.com/builder/form/c9Iyb57aGe2ETnAk3Oce7" width="660" height="805" frameBorder="0" scrolling="no" type="text/javascript" title="Work Order Form"></iframe>
        </div>
        <div className='narrow-workorder-form'>
            <iframe src="https://www.emailmeform.com/builder/form/c9Iyb57aGe2ETnAk3Oce7" width="360" height="900" frameBorder="0" scrolling="no" type="text/javascript" title="Work Order Form"></iframe>
        </div>
    </div>
)

export default WorkOrder;
