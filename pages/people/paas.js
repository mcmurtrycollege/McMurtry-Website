import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import Paas from '../../components/people/paas/paas';
import '../../components/general/page.css';

const PaasPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <Paas />
        <Footer />
    </div>
)

export default PaasPage;