import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Equipment from '../components/navbar headers/resources/equipmentrequest/equipmentrequest'

import './page.css'

const EquipmentPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <Equipment />
        <Footer />
    </div>
)

export default EquipmentPage;