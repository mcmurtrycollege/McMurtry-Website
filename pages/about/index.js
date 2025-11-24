import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Footer from '../../components/general/footer/footer';
import About from '../../components/about/about/about';
import '../../components/general/page.css'

const AboutPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        <About />
        <Footer />
    </div>
)

export default AboutPage;