import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import SMR from '../../components/people/smr/smr';
import '../../components/general/page.css'

const SMRPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <SMR />
        <Footer />
    </div>
)

export default SMRPage;