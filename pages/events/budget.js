import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import Budget from '../../components/events/budget/budget';
import '../../components/general/page.css'

const BudgetPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <Budget />
        <Footer />
    </div>
)

export default BudgetPage;