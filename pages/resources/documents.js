import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import Documents from '../../components/resources/documents/documents';
import '../../components/general/page.css'

const DocumentsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <Documents />
        <Footer />
    </div>
)

export default DocumentsPage;