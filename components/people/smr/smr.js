import Title from '../../general/title';
import { Box } from 'rebass';
import Cards from '../../general/contactcards';
import { smr } from './smr.json';
import './smr.css';

const SMR = () => (
    <div className='smr-page'>
        <Title title='Student Maintenance Rep' width={350} smallTest={true} />
        <Box width={[0.8, 0.5]} ml='auto' mr='auto'>
            <h2 className = 'smr-name'>Krishna Chandra</h2>
            <h4 className = 'smr-email'>Email: kc60@rice.edu</h4>
        </Box>
    </div>
)

export default SMR;