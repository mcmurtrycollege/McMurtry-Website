import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import MIS from '../../components/resources/mis/mis';
import '../../components/general/page.css'

const MISPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <MIS />
        <Footer />
    </div>
)

export default MISPage;