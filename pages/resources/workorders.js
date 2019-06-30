import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import WorkOrders from '../../components/resources/workorder/workorder';
import '../../components/general/page.css'

const WorkOrdersPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <WorkOrders />
        <Footer />
    </div>
)

export default WorkOrdersPage;