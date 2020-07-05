import Header from "../../components/general/header";
import Navbar from "../../components/navbar/navbarDesktop";
import NavbarMobile from "../../components/navbar/navbarMobile";
import Footer from "../../components/general/footer/footer";
import FeedbackForm from "../../components/resources/feedbackform/feedbackform";
import "../../components/general/page.css";

const FeedbackFormPage = () => (
  <div className="page">
    <Header />
    <Navbar />
    <NavbarMobile />
    <FeedbackForm />
    <Footer />
  </div>
);

export default FeedbackFormPage;
