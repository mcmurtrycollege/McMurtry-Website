import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import McmResources from '../../components/resources/mcmurtryresources/mcmresources';
import '../../components/general/page.css'

const McmResourcesPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <McmResources />
        <Footer />
    </div>
)

export default McmResourcesPage;
