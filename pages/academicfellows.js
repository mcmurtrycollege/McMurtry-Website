import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import AcademicFellows from '../components/navbar headers/academics/fellows/fellows'

import './page.css'

const AcademicFellowsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <AcademicFellows />
        <Footer />
    </div>
)

export default AcademicFellowsPage;