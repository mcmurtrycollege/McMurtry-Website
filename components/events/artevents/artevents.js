import React from 'react';
import Title from '../../general/title';
import './artevents.css';


const ArtEvents = () => (
    <div className='artevents-page'>
        <Title width={300} title="Arts Calendar" />
        <div className='artevent-calendar'>
            {/* <iframe src="https://calendar.google.com/calendar/embed?src=rice.edu_6u95bv80srmldk74hpf25jlgi0%40group.calendar.google.com&ctz=America/Chicago"  width="800" height="600" frameBorder="0" scrolling="no" title="Art Events"></iframe> */}
            <iframe src="https://calendar.google.com/calendar/embed?src=mcmurtryarts%40gmail.com&ctz=America%2FChicago" width="800" height="600" frameBorder="0" scrolling="no" title="Art Events"></iframe>
        </div>
        <div className='events-calendar-link'>
            <a href="https://calendar.google.com/calendar/embed?src=mcmurtryarts%40gmail.com&ctz=America%2FChicago" target="_blank" rel="noopener noreferrer">
                <img src='https://icon.now.sh/event/DCDFE5/70' alt="" />
                <h2>View the McMurtry Arts Calendar</h2>
            </a>
        </div>
    </div>
)

export default ArtEvents;