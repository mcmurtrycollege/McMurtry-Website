import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import Coronavirus from '../../components/resources/coronavirus/coronavirus';
import '../../components/general/page.css'

const CoronavirusPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <Coronavirus />
        <Footer />
    </div>
)

export default CoronavirusPage;
