import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import Court from '../../components/people/court/court';
import '../../components/general/page.css'

const CourtPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <Court />
        <Footer />
    </div>
)

export default CourtPage;
