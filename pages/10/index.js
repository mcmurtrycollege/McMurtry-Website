import Header from '../../components/general/header';
import Navbar from '../../components/10/navbar/navbar';
import Page from '../../components/10/homepage/homepage';
import { links } from '../../components/10/navbar/navbar.json';

import '../../components/general/page.css';

const MCM10 = () => (
    <div>
        <Header />
        <Navbar links={links} />
        <Page />
    </div>
)

export default MCM10;