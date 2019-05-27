import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import RHAs from '../components/navbar headers/wellbeing/resident_health_advisors'

import './page.css'

const RHAsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <RHAs />
        <Footer />
    </div>
)

export default RHAsPage;