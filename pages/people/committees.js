import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import Committees from '../../components/people/committees/committees';
import '../../components/general/page.css'

const CommitteesPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <Committees />
        <Footer />
    </div>
)

export default CommitteesPage;
