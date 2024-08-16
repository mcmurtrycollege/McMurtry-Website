import React from 'react';
import { Box } from 'rebass';
import Title from '../../general/title';
import './roomreservations.css';

const RoomReservations = () => (
    <div className='room-reservations-page'>
        <Title title="Reserve a Room" width={350} />
        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Category 1 Reservations</h2>
                <div>
                    <ul>
                        <li><strong>Private Dining Room </strong>(located above West Servery)</li>
                        <li><strong>McMurtry Private Rooms</strong>(located on the first floor)
                                <ul>
                                <li>Room 114 & 115 (study rooms)</li>
                                <li>TV Lounge</li>
                            </ul>
                        </li>
                    </ul>
                    <p>Our online reservation system (directions below) allows you to book rooms under Category 1 up to 3 weeks in advance. Please fill out the following form in order to make a reservation:</p>
                    <a className = 'reservation-link' href = "https://docs.google.com/forms/d/e/1FAIpQLSco26DjasAvhMKl-CNafI35-wtoLtoYJBGHPd8v8FxgMbbhYQ/viewform?usp=sf_link">Room Reservation Form</a>
                    <p>PLEASE CHECK your room's availability on the following Google Calendar before booking. After completing the form, your reservation should immediately appear on the calendar; you will receive a confirmation email if so. </p>
                    <p>IF YOU DO NOT RECEIVE A CONFIRMATION EMAIL, or your reservation does not appear on the calendar, please fill out the form again carefully or email the secretaries (see below).
                        If you would like to cancel your reservation, create a recurring reservation, or have any other questions or concerns, please email the secretaries. 
                    </p>
                </div>
            </Box>
        </div>
        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category' >
                <h2 className='category-subheader'>Category 2 Reservations</h2>
                <div>
                    <ul>
                        <li><strong>McMurtry Quad</strong></li>
                        <li><strong>McMurtry Commons</strong></li>
                    </ul>
                    <p><strong>When booking rooms under Category 2, recurring reservations, and reservations more than 3 weeks in advance: </strong>Please send details of these requests to the McMurtry College secretaries at mcmsecretary@gmail.com as these require McMurtry Leadership approval. These requests may take more time to complete so we ask for your patience while waiting for confirmation.</p>
                </div>
            </Box>
        </div>        
        <h2 className='room-question'>Have a Question?</h2>
        <div className='center-div'>
            <Box width={[0.8, 0.25]} className='reservation-email-link'>
                <a href='mailto:mcmsecretary@gmail.com' style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <h2 className='reservation-link'>mcmsecretary@gmail.com</h2>
                </a>
            </Box>
        </div>
        
        <div className='scheduler-container'>
            <iframe src="https://calendar.google.com/calendar/embed?src=2357af8ea321219e69f5f08fe7bd16bf6663c3a5a5f54a9a1f5052972ed93726%40group.calendar.google.com&ctz=America%2FChicago"  width="800" height="600"></iframe>
        </div>
        <div className='center-div'>
            <Box className='room-category'><p>Having trouble seeing the calendar? Uncheck "Prevent cross-site tracking" in your browser settings or visit <a href = "https://calendar.google.com/calendar/u/1?cid=MjM1N2FmOGVhMzIxMjE5ZTY5ZjVmMDhmZTdiZDE2YmY2NjYzYzNhNWE1ZjU0YTlhMWY1MDUyOTcyZWQ5MzcyNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t">this link.</a></p></Box>
        </div>
    </div>
)

export default RoomReservations;