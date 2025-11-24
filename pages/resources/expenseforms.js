import Header from '../../components/general/header';
import StaggeredMenu from '../../components/navbar/StaggeredMenu';

import Footer from '../../components/general/footer/footer';
import ExpenseForms from '../../components/resources/expenseforms/expenseforms';
import '../../components/general/page.css'

const ExpenseFormsPage = () => (
    <div className='page page-with-staggered-menu'>
        <Header />
        <StaggeredMenu />
        
        <ExpenseForms />
        <Footer />
    </div>
)

export default ExpenseFormsPage;
