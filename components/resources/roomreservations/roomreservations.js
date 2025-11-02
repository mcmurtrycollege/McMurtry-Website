import React from 'react';
import { Box } from 'rebass';
import Title from '../../general/title';
import './roomreservations.css';
import CustomCalendar from '../../events/CustomCalendar';


const RoomReservations = () => (
    <div className='room-reservations-page'>
                <div className='oweek-hero'>
            <h1 className='oweek-main-title'>Room reservation</h1>
        </div>        <div className='center-div'>
            <Box width={[0.9, 0.7]} className='room-category'>
                <h2 className='category-subheader'>Category 1 Reservations</h2>
                <div>
                    <ul>
                        <li><strong>Private Dining Room </strong>(located above West Servery)</li>
                        <li><strong>McMurtry Private Rooms</strong>(located on the first floor)
                                <ul>
                                <li>Room 114 (study room)</li>
                                <li>TV Lounge</li>
                                <li>4th Floor Lounge</li>
                            </ul>
                        </li>
                        <li><strong>McMurtry Music Room</strong> (located on the first floor)</li>
                        <li><strong>McMurtry Bonfire</strong> (located in the Quad; this is not the same as a Quad Reservation)</li>
                    </ul>
                    <p>There is a<strong> new </strong>reservation cap. Students may now only reserve a room for <strong><u>up to 4 hours per room per day</u></strong>.</p>
                    <ul style={{listStyleType: 'none', paddingLeft: '20px'}}>
                        <li style={{textIndent: '-10px'}}>- If you want to reserve room X, you can only reserve it for up to 4 hours.</li>
                        <li style={{textIndent: '-10px'}}>- You can still, however, make reservations for other spaces on the same day. If you need the space for longer, just email us at mcmsecretary@gmail.com to make a request.</li>
                    </ul>
                    <p>Our online reservation system (directions below) allows you to book rooms under Category 1 up to 3 weeks in advance. Please fill out the following form in order to make a reservation:</p>
                                
                    <div className='banner-container'>
                        <a href={"https://docs.google.com/forms/d/e/1FAIpQLSco26DjasAvhMKl-CNafI35-wtoLtoYJBGHPd8v8FxgMbbhYQ/viewform?usp=sf_link"} target="_blank" rel="noopener noreferrer">
                            <Box className="accessibility-fund-banner">
                                <p>Room Reservation Form</p>
                            </Box>
                        </a>
                    </div>
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
        <h2 className='section-title'>Have a Question?</h2>

        <div className='center-div'>
            <Box width={[0.8, 0.6]} className='reservation-email-link'>
                <a href='mailto:mcmsecretary@gmail.com' style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                    <h2 className='reservation-link' style={{ textAlign: 'center' }}>mcmsecretary@gmail.com</h2>
                </a>
            </Box>
        </div>
        
        <Box width={[1, 1, 0.9, 0.85]} ml='auto' mr='auto' mb={[10, 20]} mt={[0, 0]} className='event-calendar-container'>
            <CustomCalendar />
        </Box>
        <div className='center-div'>
            <Box className='room-category'><p>Having trouble seeing the calendar? Uncheck "Prevent cross-site tracking" in your browser settings or visit <a href = "https://calendar.google.com/calendar/u/1?cid=MjM1N2FmOGVhMzIxMjE5ZTY5ZjVmMDhmZTdiZDE2YmY2NjYzYzNhNWE1ZjU0YTlhMWY1MDUyOTcyZWQ5MzcyNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t">this link.</a></p></Box>
        </div>
    </div>
)

export default RoomReservations;