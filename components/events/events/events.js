import React from 'react';
import Title from '../../general/title';
import './events.css';


const Events = () => (
    <div className='events-page'>
        <Title width={190} title="Events" />
        <div className='event-calendar'>
        <iframe src="https://calendar.google.com/calendar/embed?src=mcmsecretary%40gmail.com&ctz=America%2FChicago" width="800" height="600" scrolling="no"></iframe>   
             </div>        
        <div className='events-calendar-link'>
            <a href="https://calendar.google.com/calendar/embed?src=mcmsecretary%40gmail.com&ctz=America%2FChicago" target="_blank" rel="noopener noreferrer">
                <img src='https://icon.now.sh/event/DCDFE5/70' alt="" />
                <h2>View the McMurtry Events Calendar</h2>
            </a>
        </div>
    </div>
)

export default Events;