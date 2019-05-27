import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Court from '../components/navbar headers/leadership/court/court'

import './page.css'

const CourtPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <Court />
        <Footer />
    </div>
)

export default CourtPage;