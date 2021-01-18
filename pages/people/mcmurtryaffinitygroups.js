import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import McMurtryAffinityGroups from '../../components/people/mcmurtryaffinitygroups/mcmurtryaffinitygroups';
import '../../components/general/page.css'

const McMurtryAffinityGroupsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <McMurtryAffinityGroups />
        <Footer />
    </div>
)

export default McMurtryAffinityGroupsPage;