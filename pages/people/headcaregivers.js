import Header from "../../components/general/header";
import Navbar from "../../components/navbar/navbarDesktop";
import NavbarMobile from "../../components/navbar/navbarMobile";
import Footer from "../../components/general/footer/footer";
import HeadCaregivers from "../../components/people/wellbeing/head_caregivers";
import "../../components/general/page.css";

const StriveLiaisonsPage = () => (
  <div className="page">
    <Header />
    <Navbar />
    <NavbarMobile />
    <HeadCaregivers />
    <Footer />
  </div>
);

export default StriveLiaisonsPage;
