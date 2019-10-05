import Image from '../image';
import './events.css'

const EventsComponent = (props) => {
    let eventsList = []
    for (let i = 0; i < props.events.length; i++) {
        (i % 2 === 0) ? (
            eventsList.push(
                <div className='event-wrapper' key={props.events[i].title + props.title}>
                    <div className='event-left'>
                        <p className='event-date'>{props.events[i].date}</p>
                        <div className='event-info'>
                            <p className='event-title'>{props.events[i].title}</p>
                            <p className='event-description'>{props.events[i].description}</p>
                        </div>
                    </div>
                    <Image caption={props.events[i].caption} index={i} image={props.events[i].image} />
                </div>
            )
        ) : (
                eventsList.push(
                    <div key={props.events[i].title + props.title}>
                        <div className='desktop-right'>
                            <div className='event-wrapper'>
                                <Image caption={props.events[i].caption} index={i} image={props.events[i].image} />
                                <div className='event-right'>
                                    <p className='event-date'>{props.events[i].date}</p>
                                    <div className='event-info'>
                                        <p className='event-title'>{props.events[i].title}</p>
                                        <p className='event-description'>{props.events[i].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mobile-right'>
                            <div className='event-wrapper'>
                                <div className='event-right'>
                                    <p className='event-date'>{props.events[i].date}</p>
                                    <div className='event-info'>
                                        <p className='event-title'>{props.events[i].title}</p>
                                        <p className='event-description'>{props.events[i].description}</p>
                                    </div>
                                </div>
                                <Image caption={props.events[i].caption} index={i} image={props.events[i].image} />
                            </div>
                        </div>
                    </div>
                )
            )
    }

    return (
        <div>
            <h1 className='mcm10-schedule'>{props.title}</h1>
            <div className='events-list'>
                {eventsList}
            </div>
        </div>
    )
}

export default EventsComponent;