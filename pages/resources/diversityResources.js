import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import DiversityResources from '../../components/resources/diversityResources/diversityResources';
import '../../components/general/page.css'

const DiversityResourcesPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <DiversityResources />
        <Footer />
    </div>
)

export default DiversityResourcesPage;
