import { Box, Image } from 'rebass';
import Cards from '../../general/contactcards';
import { smr } from './smr.json';
import './smr.css';

const SMR = () => (
    <div className='smr-page'>
        <div className='smr-hero'>
            <h1 className='smr-main-title'>Student Maintenance Rep</h1>
        </div>
        <Box width={[0.8, 0.5]} mx = 'auto'>
            <h2 className = 'smr-name'>{smr[0].name}</h2>
            <h4 className = 'smr-email'>Email: {smr[0].email}</h4>
        </Box>
        <Box width={[0.8, 0.5, 0.4, 0.3]} mx='auto' my = {3}>
            <Image src={smr[0].image} />
        </Box>
        <Box width={[0.8, 0.5]} mx = 'auto' pb = {.2}>
            {smr[0].body}
        </Box>
        
    </div>
)

export default SMR;