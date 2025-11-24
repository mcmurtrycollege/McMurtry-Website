import React from 'react';
import { Box } from 'rebass';
import './workorder.css';

const WorkOrder = () => (
    <div className='workorder-page'>
        <div className='workorder-hero'>
            <h1 className='workorder-main-title'>Work Order</h1>
        </div>
        
        {/* Updated container to match standardized responsive width */}
        <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto' mb={[20, 50]} mt={[10, 20]} px={[0, 0, 'auto', 'auto']} className='workorder-card'>
            <div className='workorder-icon'>
                <img src="/static/icons/building.svg" alt="" />
            </div>
            
            <p className='workorder-text'>
                To complete a work order, please email <a href="mailto:work@rice.edu" className='highlight-link'>work@rice.edu</a> with:
            </p>
            
            <ul className='workorder-list'>
                <li>Your name and phone number</li>
                <li>Residential college and room number</li>
                <li>A description of the problem</li>
                <li>A photo (if applicable)</li>
            </ul>

            <div className='workorder-divider'></div>

            <p className='workorder-text'>
                For complaints or work orders related to <strong>McMurtry public spaces</strong>, please use our dedicated form:
            </p>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLScCPOKCzAF0CCLFZg7hfNpfiVOVDt6dZjh-iomdNsljjmLykQ/viewform" target="_blank" rel="noopener noreferrer" className='workorder-button'>
                Public Space Work Order Form
            </a>
        </Box>     
    </div>
)

export default WorkOrder;