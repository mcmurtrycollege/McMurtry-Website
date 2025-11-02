import React from 'react';
import { Box, Flex } from 'rebass';
import './financial_inclusivity.css';

const FinancialInclusivity = () => (
    <div className='fin-inc-page'>
        <div className='fin-inc-hero'>
            <h1 className='fin-inc-main-title'>Financial Inclusivity</h1>
        </div>
        
        <Box className='fin-inc-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[0, 0]}>
            <h2 className='fin-inc-section-title'>Our Commitment</h2>
            <p>McMurtry College has committed to making financial accessibility an utmost priority and to be a leader in the socioeconomic inclusivity initiative at Rice.</p>
            
            <p>After holding discussions at several town halls, with the magisters, and at cabinet meetings, McMurtry is implementing an initiative (starting in Spring 2017) to address socioeconomic inequality with regards to social life at our college. With the expectation that this proposal will be continuously improved based on tracking certain metrics, below is a summary of the current plan:</p>
            
            <h2 className='fin-inc-section-title'>Our Mission</h2>
            <p>To create a residential college experience in which events and Murtchandise are accessible to all students regardless of socioeconomic status.</p>
            
            <h2 className='fin-inc-section-title'>Guidelines</h2>
            <ul>
                <li>Make all events and merchandise as inexpensive as possible (if possible, free), with a cap of $7/event or $7/merchandise.</li>
                <li>Provide Beer Bike shirts free of cost.</li>
                <li>Establish the Magister's Fund so students (when in need) can opt into extra funding. This fund is intended to cover ground we may miss with blanket subsidization, to offer extra support to students in difficult circumstances, and to avoid limiting students to social events that the college has deemed essential.</li>
            </ul>
        </Box>
        
        <h2 className='fin-inc-section-title' style={{ textAlign: 'center', marginBottom: '2rem' }}>Resources</h2>
        <div className='center-div'>
            <div className='fin-inc-content'>
                <Box className='fin-inc-link'>
                    <a href='https://goo.gl/forms/KEyPplLhclljdSOm2' target="_blank" rel="noopener noreferrer">
                        <p><strong>McMurtry Magisters' Fund</strong></p>
                        <p>Apply for financial support to cover college event costs and merchandise</p>
                    </a>
                </Box>
                <Box className='fin-inc-link'>
                    <a href='https://aop.rice.edu/application' target="_blank" rel="noopener noreferrer">
                        <p><strong>Rice Access and Opportunity Portal</strong></p>
                        <p>Apply for funding to cover academic expenses like textbooks and supplies</p>
                    </a>
                </Box>
                <Box className='fin-inc-link'>
                    <a href='https://linktr.ee/ricemutualaid' target="_blank" rel="noopener noreferrer">
                        <p><strong>Rice Mutual Aid Resources</strong></p>
                        <p>Access community-based support and peer assistance networks</p>
                    </a>
                </Box>
            </div>
        </div>
    </div >
)

export default FinancialInclusivity;