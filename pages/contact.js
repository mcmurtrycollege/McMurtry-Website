import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Contact from '../components/navbar headers/contact/contact'

import './page.css'

const ContactPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <Contact />
        <Footer />
    </div>
)

export default ContactPage;