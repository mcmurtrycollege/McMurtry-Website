import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Page from '../../components/oweek/movein/move';
import '../../components/general/page.css';

const OweekMoveIn = () => (
    <div className='page-with-staggered-menu'>
        <Header/>
        <StaggeredMenu />
        <Page/>
    </div>
)

export default OweekMoveIn;
