import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import PCardManagement from '../../components/resources/pcardmanagement/pcardmanagement';
import '../../components/general/page.css'

const PCardManagementPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <PCardManagement />
        <Footer />
    </div>
)

export default PCardManagementPage;
