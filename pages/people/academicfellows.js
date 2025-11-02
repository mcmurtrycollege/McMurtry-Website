import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import AcademicFellows from '../../components/people/fellows/fellows';
import '../../components/general/page.css'

const AcademicFellowsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <AcademicFellows />
        <Footer />
    </div>
)

export default AcademicFellowsPage;
