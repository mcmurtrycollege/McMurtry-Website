import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import Paas from '../../components/people/paas/paas';
import '../../components/general/page.css';

const PaasPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <Paas />
        <Footer />
    </div>
)

export default PaasPage;
