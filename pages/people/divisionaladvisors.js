import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import DivisionalAdvisors from '../../components/people/divisionaladvisors/divisionaladvisors';
import '../../components/general/page.css'

const DivisionalAdvisorsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <DivisionalAdvisors />
        <Footer />
    </div>
)

export default DivisionalAdvisorsPage;