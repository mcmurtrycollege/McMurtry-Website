import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import StriveLiaisons from '../components/navbar headers/wellbeing/strive_liaisons'

import './page.css'

const StriveLiaisonsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <StriveLiaisons />
        <Footer />
    </div>
)

export default StriveLiaisonsPage;