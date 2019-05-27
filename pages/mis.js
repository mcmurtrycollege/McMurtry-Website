import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import MIS from '../components/navbar headers/resources/mis/mis'

import './page.css'

const MISPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <MIS />
        <Footer />
    </div>
)

export default MISPage;