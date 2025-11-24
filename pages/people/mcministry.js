import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import McMinistry from '../../components/people/mcministry/mcministry';
import '../../components/general/page.css'

const McMinistryPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <McMinistry />
        <Footer />
    </div>
)

export default McMinistryPage;
