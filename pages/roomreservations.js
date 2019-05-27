import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import RoomReservations from '../components/navbar headers/resources/roomreservations/roomreservations'

import './page.css'

const RoomReservationsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <RoomReservations />
        <Footer />
    </div>
)

export default RoomReservationsPage;