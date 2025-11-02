import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Footer from '../../components/general/footer/footer';
import Events from '../../components/events/events/events';
import '../../components/general/page.css'

const EventsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        <Events />
        <Footer />
    </div>
)

export default EventsPage;