import Header from '../../components/general/header';
import Navbar from '../../components/navbar/navbarDesktop';
import NavbarMobile from '../../components/navbar/navbarMobile';
import Footer from '../../components/general/footer/footer';
import ExpenseForms from '../../components/resources/expenseforms/expenseforms';
import '../../components/general/page.css'

const ExpenseFormsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <NavbarMobile />
        <ExpenseForms />
        <Footer />
    </div>
)

export default ExpenseFormsPage;