import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import RHAs from '../../components/people/wellbeing/resident_health_advisors';
import '../../components/general/page.css'

const RHAsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <RHAs />
        <Footer />
    </div>
)

export default RHAsPage;
