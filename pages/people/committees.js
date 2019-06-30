import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import Committees from '../../components/people/committees/committees';
import '../../components/general/page.css'

const CommitteesPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <Committees />
        <Footer />
    </div>
)

export default CommitteesPage;