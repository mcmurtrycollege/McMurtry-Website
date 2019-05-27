import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Events from '../components/navbar headers/events/events/events'

import './page.css'

const EventsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <Events />
        <Footer />
    </div>
)

export default EventsPage;