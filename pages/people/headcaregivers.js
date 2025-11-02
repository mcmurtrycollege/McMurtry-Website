import Header from "../../components/general/header";
import StaggeredMenu from "../../components/navbar/StaggeredMenu";
import Footer from "../../components/general/footer/footer";
import HeadCaregivers from "../../components/people/wellbeing/head_caregivers";
import "../../components/general/page.css";

const StriveLiaisonsPage = () => (
  <div className='page page-with-staggered-menu'>
    <Header />
    <StaggeredMenu />
    
    <HeadCaregivers />
    <Footer />
  </div>
);

export default StriveLiaisonsPage;

