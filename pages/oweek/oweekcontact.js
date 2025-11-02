import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Footer from '../../components/general/footer/footer';
import Page from '../../components/oweek/contact/contact';
import '../../components/general/page.css';

const OweekContact = () => (
    <div className='page-with-staggered-menu'>
        <Header/>
        <StaggeredMenu />
        <Page/>
        <Footer />
    </div>
)

export default OweekContact;
