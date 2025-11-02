import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import Documents from '../../components/resources/documents/documents';
import '../../components/general/page.css'

const DocumentsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <Documents />
        <Footer />
    </div>
)

export default DocumentsPage;
