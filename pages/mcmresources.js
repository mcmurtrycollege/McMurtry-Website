import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import McmResources from '../components/navbar headers/resources/mcmurtryresources/mcmresources'

import './page.css'

const McmResourcesPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <McmResources />
        <Footer />
    </div>
)

export default McmResourcesPage;