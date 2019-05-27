import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import ExpenseForms from '../components/navbar headers/resources/expenseforms/expenseforms'

import './page.css'

const ExpenseFormsPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <ExpenseForms />
        <Footer />
    </div>
)

export default ExpenseFormsPage;