import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import Associates from '../../components/people/associates/associates';
import '../../components/general/page.css'

const AssociatesPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <Associates />
        <Footer />
    </div>
)

export default AssociatesPage;
