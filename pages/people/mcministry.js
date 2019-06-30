import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import McMinistry from '../../components/people/mcministry/mcministry';
import '../../components/general/page.css'

const McMinistryPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <McMinistry />
        <Footer />
    </div>
)

export default McMinistryPage;