import Header from '../components/general/header';
import Navbar from '../components/navbar/navbarDesktop';
import NavbarMobile from '../components/navbar/navbarMobile';
import Footer from '../components/general/footer/footer';
import Intro from '../components/splashpage/intropage'
import '../components/general/page.css'

const Home = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <Intro />
        <Footer />
    </div>
)

export default Home;