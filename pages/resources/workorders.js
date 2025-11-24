import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import WorkOrders from '../../components/resources/workorder/workorder';
import '../../components/general/page.css'

const WorkOrdersPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <WorkOrders />
        <Footer />
    </div>
)

export default WorkOrdersPage;
