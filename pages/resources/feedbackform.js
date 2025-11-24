import Header from "../../components/general/header";
import Footer from "../../components/general/footer/footer";
import StaggeredMenu from "../../components/navbar/StaggeredMenu";
import FeedbackForm from "../../components/resources/feedbackform/feedbackform";
import "../../components/general/page.css";

const FeedbackFormPage = () => (
  <div className='page page-with-staggered-menu'>
    <Header />
    <StaggeredMenu />
    
    <FeedbackForm />
    <Footer />
  </div>
);

export default FeedbackFormPage;