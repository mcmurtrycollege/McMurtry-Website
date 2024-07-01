import Title from '../../general/title';
import { Box, Image } from 'rebass';
import Cards from '../../general/contactcards';
import { smr } from './smr.json';
import './smr.css';

const SMR = () => (
    <div className='smr-page'>
        <Title title='Student Maintenance Rep' width={350} smallTest={true} />
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