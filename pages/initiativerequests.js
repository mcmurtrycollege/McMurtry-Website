import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import InitiativeRequests from '../components/navbar headers/resources/initiativerequest/initiativerequest'

import './page.css'

const InitiativeRequestsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <InitiativeRequests />
        <Footer />
    </div>
)

export default InitiativeRequestsPage;