import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import StriveLiaisons from '../../components/people/wellbeing/strive_liaisons';
import '../../components/general/page.css'

const StriveLiaisonsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <StriveLiaisons />
        <Footer />
    </div>
)

export default StriveLiaisonsPage;