import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import Associates from '../../components/people/associates/associates';
import '../../components/general/page.css'

const AssociatesPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <Associates />
        <Footer />
    </div>
)

export default AssociatesPage;