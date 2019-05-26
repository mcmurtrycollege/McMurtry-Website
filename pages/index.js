import Header from '../components/header'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Intro from '../components/splashpage/intropage'

import './page.css'

const Home = () => (
    <div className='page'>
        <Header />
        <Navbar />
        <Intro />
        <Footer />
    </div>
)

export default Home;