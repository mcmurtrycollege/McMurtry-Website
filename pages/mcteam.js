import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import McTeam from '../components/navbar headers/leadership/mcteam/mcteam'

import './page.css'

const McTeamPage = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <McTeam />
        <Footer />
    </div>
)

export default McTeamPage;