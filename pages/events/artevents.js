import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import ArtEvents from '../../components/events/artevents/artevents';
import '../../components/general/page.css'

const EventsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <ArtEvents />
        <Footer />
    </div>
)

export default EventsPage;
