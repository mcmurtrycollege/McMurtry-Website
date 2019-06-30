import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import McTeam from '../../components/people/mcteam/mcteam';
import '../../components/general/page.css'

const McTeamPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <McTeam />
        <Footer />
    </div>
)

export default McTeamPage;