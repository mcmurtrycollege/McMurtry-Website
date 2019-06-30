import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import McmResources from '../../components/resources/mcmurtryresources/mcmresources';
import '../../components/general/page.css'

const McmResourcesPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <McmResources />
        <Footer />
    </div>
)

export default McmResourcesPage;