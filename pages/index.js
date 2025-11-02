import Header from '../components/general/header';
import StaggeredMenu from '../components/navbar/StaggeredMenu';
// import Banner from '../components/10/banner/banner';
import Footer from '../components/general/footer/footer';
import Intro from '../components/splashpage/intropage'
import '../components/general/page.css'

const Home = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        {/* <Banner /> */}
        <Intro />
        <Footer />
    </div>
)

export default Home;