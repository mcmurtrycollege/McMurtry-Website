import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import RHAs from '../../components/people/wellbeing/resident_health_advisors';
import '../../components/general/page.css'

const RHAsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <RHAs />
        <Footer />
    </div>
)

export default RHAsPage;