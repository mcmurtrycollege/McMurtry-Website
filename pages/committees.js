import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Committees from '../components/navbar headers/leadership/committees/committees'

import './page.css'

const CommitteesPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <Committees />
        <Footer />
    </div>
)

export default CommitteesPage;