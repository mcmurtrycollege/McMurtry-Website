import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Page from '../../components/10/faqs/faqs';
import '../../components/general/page.css';

const FAQS = () => (
    <div className='page-with-staggered-menu'>
        <Header/>
        <StaggeredMenu/>
        <Page/>
    </div>
)

export default FAQS;