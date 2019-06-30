import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import ArtEvents from '../../components/events/artevents/artevents';
import '../../components/general/page.css'

const EventsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <ArtEvents />
        <Footer />
    </div>
)

export default EventsPage;