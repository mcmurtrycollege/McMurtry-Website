import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import InitiativeRequests from '../../components/resources/initiativerequest/initiativerequest';
import '../../components/general/page.css'

const InitiativeRequestsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <InitiativeRequests />
        <Footer />
    </div>
)

export default InitiativeRequestsPage;
