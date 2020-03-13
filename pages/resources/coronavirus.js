import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import Coronavirus from '../../components/resources/coronavirus/coronavirus';
import '../../components/general/page.css'

const CoronavirusPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <Coronavirus />
        <Footer />
    </div>
)

export default CoronavirusPage;