import React from 'react';
import { Box } from 'rebass';
import CustomCalendar from '../CustomCalendar';
import './events.css';


const Events = () => (
    <div className='events-page'>
        <div className='events-hero'>
            <h1 className='events-main-title'>Events Calendar</h1>
        </div>
        
        <Box width={[1, 1, 0.9, 0.85]} ml='auto' mr='auto' mb={[10, 20]} mt={[0, 0]} className='event-calendar-container'>
            <CustomCalendar />
        </Box>
        
        <div className='events-calendar-link'>
            <a href="https://calendar.google.com/calendar/u/0/r?cid=mcmsecretary@gmail.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <line x1="12" y1="14" x2="12" y2="18"></line>
                    <line x1="10" y1="16" x2="14" y2="16"></line>
                </svg>
                <h2>Add to My Calendar</h2>
            </a>
        </div>
    </div>
)

export default Events;