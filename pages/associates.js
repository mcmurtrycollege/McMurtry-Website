import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Associates from '../components/navbar headers/leadership/associates/associates'

import './page.css'

const AssociatesPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <Associates />
        <Footer />
    </div>
)

export default AssociatesPage;