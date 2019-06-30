import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import FinancialInclusivty from '../../components/about/financial_inclusivity/financial_Inclusivity';
import '../../components/general/page.css'

const FinancialInclusivtyPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <FinancialInclusivty />
        <Footer />
    </div>
)

export default FinancialInclusivtyPage;