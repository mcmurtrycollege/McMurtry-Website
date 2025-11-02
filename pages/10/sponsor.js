import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Page from '../../components/10/sponsor/sponsor';
import '../../components/general/page.css';

const Sponsor = () => (
    <div className='page-with-staggered-menu'>
        <Header/>
        <StaggeredMenu/>
        <Page/>
    </div>
)

export default Sponsor;