import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import MIS from '../../components/resources/mis/mis';
import '../../components/general/page.css'

const MISPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <MIS />
        <Footer />
    </div>
)

export default MISPage;
