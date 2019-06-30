import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import InitiativeRequests from '../../components/resources/initiativerequest/initiativerequest';
import '../../components/general/page.css'

const InitiativeRequestsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <InitiativeRequests />
        <Footer />
    </div>
)

export default InitiativeRequestsPage;