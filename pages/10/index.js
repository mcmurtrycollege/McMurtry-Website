import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Page from '../../components/10/homepage/homepage';

import '../../components/general/page.css';

const MCM10 = () => (
    <div className='page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        <Page />
    </div>
)

export default MCM10;
