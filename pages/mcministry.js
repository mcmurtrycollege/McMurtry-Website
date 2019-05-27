import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import McMinistry from '../components/navbar headers/leadership/mcministry/mcministry'

import './page.css'

const McMinistryPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <McMinistry />
        <Footer />
    </div>
)

export default McMinistryPage;