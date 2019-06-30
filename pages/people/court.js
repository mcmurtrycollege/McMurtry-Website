import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import Court from '../../components/people/court/court';
import '../../components/general/page.css'

const CourtPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <Court />
        <Footer />
    </div>
)

export default CourtPage;