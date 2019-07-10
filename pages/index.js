import Header from '../components/general/header';
import Navbar from '../components/navbar/navbarDesktop';
import NavbarMobile from '../components/navbar/navbarMobile';
// import Banner from '../components/10/banner/banner';
import Footer from '../components/general/footer/footer';
import Intro from '../components/splashpage/intropage'
import '../components/general/page.css'

const Home = () => (
    <div className='page'>
        <Header />
        <Navbar />
        {/* <Banner /> */}
        <NavbarMobile />
        <Intro />
        <Footer />
    </div>
)

export default Home;