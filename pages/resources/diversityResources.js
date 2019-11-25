import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import DiversityResources from '../../components/resources/diversityResources/diversityResources';
import '../../components/general/page.css'

const DiversityResourcesPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <DiversityResources />
        <Footer />
    </div>
)

export default DiversityResourcesPage;