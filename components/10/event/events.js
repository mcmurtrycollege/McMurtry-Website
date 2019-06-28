import { events } from './events.json';
import Image from '../image';
import './events.css'

const EventsComponent = () => {
    let eventsList = []
    for (let i = 0; i < events.length; i++) {
        (i % 2 === 0) ? (
            eventsList.push(
                <div className='event-wrapper' key={events[i].title}>
                    <div className='event-left'>
                        <p className='event-date'>{events[i].date}</p>
                        <div className='event-info'>
                            <p className='event-title'>{events[i].title}</p>
                            <p className='event-description'>{events[i].description}</p>
                        </div>
                    </div>
                    <Image caption={events[i].caption} index={i} image={events[i].image} />
                </div>
            )
        ) : (
                eventsList.push(
                    <div key={events[i].title}>
                        <div className='desktop-right'>
                            <div className='event-wrapper'>
                                <Image caption={events[i].caption} index={i} image={events[i].image} />
                                <div className='event-right'>
                                    <p className='event-date'>{events[i].date}</p>
                                    <div className='event-info'>
                                        <p className='event-title'>{events[i].title}</p>
                                        <p className='event-description'>{events[i].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mobile-right'>
                            <div className='event-wrapper'>
                                <div className='event-right'>
                                    <p className='event-date'>{events[i].date}</p>
                                    <div className='event-info'>
                                        <p className='event-title'>{events[i].title}</p>
                                        <p className='event-description'>{events[i].description}</p>
                                    </div>
                                </div>
                                <Image caption={events[i].caption} index={i} image={events[i].image} />
                            </div>
                        </div>
                    </div>
                )
            )
    }

    return (
        <div>
            <h1 className='mcm10-schedule'>Schedule</h1>
            <div className='events-list'>
                {eventsList}
            </div>
        </div>
    )
}

export default EventsComponent;