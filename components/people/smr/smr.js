import Title from '../../general/title';
import { Box } from 'rebass';
import { smr_bio } from './smr.json';
import './smr.css';

const SMR = () => (
    <div className='smr-page'>
        <Title title='Student Maintenance Rep' width={350} smallTest={true} />
        <Box width={[0.8, 0.5]} ml='auto' mr='auto'>
            <p>{smr_bio}</p>
        </Box>
    </div>
)

export default SMR;