import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import AcademicFellows from '../../components/people/fellows/fellows';
import '../../components/general/page.css'

const AcademicFellowsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <AcademicFellows />
        <Footer />
    </div>
)

export default AcademicFellowsPage;