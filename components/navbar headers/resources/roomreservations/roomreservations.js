import React from 'react';
import { Box } from 'rebass';
import Title from '../../../title';
import './roomreservations.css';

const RoomReservations = () => (
    <div className='room-reservations-page'>
        <Title title="Reserve a Room" width={350} />
        <Box width={[0.9, 0.7]} className='room-catagory'>
            <h2 className='catagory-subheader'>Category 1 Reservations</h2>
            <div>
                <ul>
                    <li><strong>Private Dining Room </strong>(located above West Servery)</li>
                    <li><strong>Library </strong>(located above West Servery)</li>
                    <li><strong>McMurtry Private Rooms</strong>(located on the first floor)
                            <ul>
                            <li>Room 114 & 115 (study rooms)</li>
                            <li>TV Lounge</li>
                        </ul>
                    </li>
                </ul>
                <p>Our online reservation system (directions below) allows you to book rooms under Category 1 up to 3 weeks in advance.</p>
                <p><strong>When booking for the first time: </strong>Please set up and confirm your account using this{' '}
                 <strong><a href='https://mcmurtryreservation.skedda.com/register?key=576c21c' target="_blank" style={{ color: '#422a4C' }} rel="noopener noreferrer">link</a></strong>.
                 A confirmation of your registration will be sent to your email and will take approximately one minute to complete. Please select the 'Remember Me' option when entering your login information. Once registering, double click on the calendar located below, log in, and create your reservation.</p>
                <p><strong>For every subsequent booking: </strong>Use the calendar located below to make your reservation. You will automatically be logged in as a registered user. Bookings can be viewed and cancelled through your account after making your first reservation. We ask that you provide a title and brief description for the purpose of your reservation as well as contact information. Note: Failure to include this information may result in the cancellation of your reservation.</p>
            </div>
        </Box>
        <Box width={[0.9, 0.7]} className='room-catagory' >
            <h2 className='catagory-subheader'>Catagory 2 Reservations</h2>
            <div>
                <ul>
                    <li><strong>McMurtry Quad</strong></li>
                    <li><strong>McMurtry Commons</strong></li>
                </ul>
                <p><strong>When booking rooms under Category 2, recurring reservations, and reservations more than 3 weeks in advance: </strong>Please send details of these requests to the McMurtry College secretaries at mcmsecretary@gmail.com as these require McMurtry Leadership approval. These requests may take more time to complete so we ask for your patience while waiting for confirmation.</p>
            </div>
        </Box>
        <h2 className='room-question'>Have a Question?</h2>
        <Box width={[0.8, 0.25]} className='reservation-email-link'>
            <a href='mailto:mcmsecretary@gmail.com' style={{ textDecoration: 'none' }} rel="noopener noreferrer">
                <img src="https://icon.now.sh/email/2B2F3A/80" alt='' />
                <h2 className='reservation-link'>mcmsecretary@gmail.com</h2>
            </a>
        </Box>
        <div className='scheduler-container'>
            <iframe src="https://mcmurtryreservation.skedda.com/booking?embedded=true" className='scheduler' title='scheduler'></iframe>
        </div>
    </div>
)

export default RoomReservations;