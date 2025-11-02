import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import DivisionalAdvisors from '../../components/people/divisionaladvisors/divisionaladvisors';
import '../../components/general/page.css'

const DivisionalAdvisorsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <DivisionalAdvisors />
        <Footer />
    </div>
)

export default DivisionalAdvisorsPage;
