import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import MobileNavbar from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import About from '../../components/about/about/about';
import '../../components/general/page.css'

const AboutPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <MobileNavbar />
        <About />
        <Footer />
    </div>
)

export default AboutPage;