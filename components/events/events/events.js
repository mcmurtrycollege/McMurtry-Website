import React from 'react';
import Title from '../../general/title';
import './events.css';


const Events = () => (
    <div className='events-page'>
        <Title width={190} title="Events" />
        <div className='event-calendar'>
        <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=bWNtc2VjcmV0YXJ5QGdtYWlsLmNvbQ&amp;src=cmljZS5lZHVfZDZhdXNhZnBmbGp1OXZqNzdzczZhc2hlYTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=MGYza2w0OXY4c2o5ZTh1aG5haTI2NTBnY2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cmd0MzlzMW82MDBnZnQ2Y2V0ZTg0NTRhdDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cmljZS5lZHVfaXFzM3NtYXRsOWpvdWY4OW1vb3BubmNwZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cmljZS5lZHVfMDN1cXUybHZwMWZjYWxqOHIwNTk3MTVxNDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cmljZS5lZHVfcWowcmJvbnNnY3A0MG1iNjg1OWN2Nmp2MXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=cmljZS5lZHVfc2c2MXJicjVib3NtY3Zqdjg3cGFrbTM5cWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%233F51B5&amp;color=%2333B679&amp;color=%23616161&amp;color=%23039BE5&amp;color=%23F6BF26&amp;color=%239E69AF&amp;color=%23D81B60&amp;color=%237CB342&amp;color=%23F09300" width="800" height="600" frameborder="0" scrolling="no"></iframe>   
             </div>        
        <div className='events-calendar-link'>
            <a href="https://calendar.google.com/calendar/embed?src=rice.edu_03uqu2lvp1fcalj8r059715q40%40group.calendar.google.com&ctz=America/Chicago&amp;showTitle=0" target="_blank" rel="noopener noreferrer">
                <img src='https://icon.now.sh/event/DCDFE5/70' alt="" />
                <h2>View the McMurtry Events Calendar</h2>
            </a>
        </div>
    </div>
)

export default Events;