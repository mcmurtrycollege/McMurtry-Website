import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import RoomReservations from '../../components/resources/roomreservations/roomreservations';
import '../../components/general/page.css'

const RoomReservationsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <RoomReservations />
        <Footer />
    </div>
)

export default RoomReservationsPage;