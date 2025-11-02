import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import StriveLiaisons from '../../components/people/wellbeing/strive_liaisons';
import '../../components/general/page.css'

const StriveLiaisonsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <StriveLiaisons />
        <Footer />
    </div>
)

export default StriveLiaisonsPage;
