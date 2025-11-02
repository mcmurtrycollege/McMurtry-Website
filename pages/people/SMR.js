import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import SMR from '../../components/people/smr/smr';
import '../../components/general/page.css'

const SMRPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <SMR />
        <Footer />
    </div>
)

export default SMRPage;
