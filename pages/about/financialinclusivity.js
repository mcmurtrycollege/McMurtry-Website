import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';
import Footer from '../../components/general/footer/footer';
import FinancialInclusivty from '../../components/about/financial_inclusivity/financial_Inclusivity';
import '../../components/general/page.css'

const FinancialInclusivtyPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        <FinancialInclusivty />
        <Footer />
    </div>
)

export default FinancialInclusivtyPage;