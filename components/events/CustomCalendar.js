import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import interactionPlugin from '@fullcalendar/interaction';
import './CustomCalendar.css';

const CustomCalendar = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [initialView, setInitialView] = useState(null);

    useEffect(() => {
        // Check if the device is mobile
        const isMobile = window.innerWidth <= 768;
        setInitialView(isMobile ? 'dayGridWeek' : 'dayGridMonth');
    }, []);

    const handleEventClick = (info) => {
        info.jsEvent.preventDefault();
        
        setSelectedEvent({
            title: info.event.title,
            start: info.event.start,
            end: info.event.end,
            description: info.event.extendedProps.description || '',
            location: info.event.extendedProps.location || '',
            url: info.event.url
        });
    };

    const closePopup = () => {
        setSelectedEvent(null);
    };

    const formatDate = (date) => {
        if (!date) return '';
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).format(date);
    };

    return (
        <div className="custom-calendar-wrapper">
            {initialView && (
                <FullCalendar
                    plugins={[dayGridPlugin, googleCalendarPlugin, interactionPlugin]}
                    initialView={initialView}
                    googleCalendarApiKey="AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs"
                    events={{
                        googleCalendarId: 'mcmsecretary@gmail.com'
                    }}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek'
                    }}
                    buttonText={{
                        today: 'Today',
                        month: 'Month',
                        week: 'Week'
                    }}
                    height="auto"
                    eventDisplay="block"
                    displayEventTime={true}
                    eventTimeFormat={{
                        hour: 'numeric',
                        minute: '2-digit',
                        meridiem: 'short'
                    }}
                    eventClick={handleEventClick}
                />
            )}
            
            {selectedEvent && (
                <div className="event-popup-overlay" onClick={closePopup}>
                    <div className="event-popup" onClick={(e) => e.stopPropagation()}>
                        <button className="event-popup-close" onClick={closePopup}>×</button>
                        
                        <h3 className="event-popup-title">{selectedEvent.title}</h3>
                        
                        <div className="event-popup-details">
                            <div className="event-popup-time">
                                <img src="https://icon.now.sh/schedule/FFFFFF/24" alt="Time" />
                                <div>
                                    <p><strong>Start:</strong> {formatDate(selectedEvent.start)}</p>
                                    {selectedEvent.end && (
                                        <p><strong>End:</strong> {formatDate(selectedEvent.end)}</p>
                                    )}
                                </div>
                            </div>
                            
                            {selectedEvent.location && (
                                <div className="event-popup-location">
                                    <img src="https://icon.now.sh/place/FFFFFF/24" alt="Location" />
                                    <p>{selectedEvent.location}</p>
                                </div>
                            )}
                            
                            {selectedEvent.description && (
                                <div className="event-popup-description">
                                    <img src="https://icon.now.sh/description/FFFFFF/24" alt="Description" />
                                    <p>{selectedEvent.description}</p>
                                </div>
                            )}
                            
                            {selectedEvent.url && (
                                <a 
                                    href={selectedEvent.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="event-popup-link"
                                >
                                    <img src="https://icon.now.sh/open_in_new/FFFFFF/20" alt="Open" />
                                    View in Google Calendar
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomCalendar;

