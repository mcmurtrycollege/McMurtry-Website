import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import FinancialInclusivty from '../components/navbar headers/about/financial_inclusivity/financial_Inclusivity'

import './page.css'

const FinancialInclusivtyPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <FinancialInclusivty />
        <Footer />
    </div>
)

export default FinancialInclusivtyPage;