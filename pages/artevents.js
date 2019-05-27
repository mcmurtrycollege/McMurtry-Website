import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import ArtEvents from '../components/navbar headers/events/artevents/artevents'

import './page.css'

const EventsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <ArtEvents />
        <Footer />
    </div>
)

export default EventsPage;