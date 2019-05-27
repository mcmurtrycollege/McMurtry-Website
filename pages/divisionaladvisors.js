import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import DivisionalAdvisors from '../components/navbar headers/academics/divisionaladvisors/divisionaladvisors'

import './page.css'

const DivisionalAdvisorsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <DivisionalAdvisors />
        <Footer />
    </div>
)

export default DivisionalAdvisorsPage;