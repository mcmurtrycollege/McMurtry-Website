import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import BudgetSheet from '../../components/events/budgetsheet/budgetsheet';
import '../../components/general/page.css'

const BudgetSheetPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <BudgetSheet />
        <Footer />
    </div>
)

export default BudgetSheetPage;