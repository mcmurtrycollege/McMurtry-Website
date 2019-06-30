import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import Events from '../../components/events/events/events';
import '../../components/general/page.css'

const EventsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <Events />
        <Footer />
    </div>
)

export default EventsPage;