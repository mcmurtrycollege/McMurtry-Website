import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Paas from '../components/navbar headers/academics/paas/paas'

import './page.css'

const PaasPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <Paas />
        <Footer />
    </div>
)

export default PaasPage;