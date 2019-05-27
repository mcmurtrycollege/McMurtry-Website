import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import WorkOrders from '../components/navbar headers/resources/workorder/workorder'

import './page.css'

const WorkOrdersPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <WorkOrders />
        <Footer />
    </div>
)

export default WorkOrdersPage;