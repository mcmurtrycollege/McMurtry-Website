import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Footer from '../../components/general/footer/footer';
import RoomReservations from '../../components/resources/roomreservations/roomreservations';
import '../../components/general/page.css'

const RoomReservationsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        <RoomReservations />
        <Footer />
    </div>
)

export default RoomReservationsPage;