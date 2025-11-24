import Header from "../../components/general/header";
import Navbar from "../../components/navbar/navbarDesktop";
import NavbarMobile from "../../components/navbar/navbarMobile";
import Footer from "../../components/general/footer/footer";
import BlackLivesMatter from "../../components/resources/blm/blm";
import "../../components/general/page.css";

const BlackLivesMatterPage = () => (
  <div className='page page-with-staggered-menu'>
    <Header />
    <StaggeredMenu />
    
    <BlackLivesMatter />
    <Footer />
  </div>
);

export default BlackLivesMatterPage;

