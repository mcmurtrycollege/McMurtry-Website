import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Documents from '../components/navbar headers/resources/documents/documents'

import './page.css'

const DocumentsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <Documents />
        <Footer />
    </div>
)

export default DocumentsPage;