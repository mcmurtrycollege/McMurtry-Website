import { Box, Image } from 'rebass';
import '../oweek.css';

const Room = () => (
    <div className='oweek-page'>
        <div className='oweek-hero'>
            <h1 className='oweek-main-title'>Your Room</h1>
        </div>

        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[0, 0]}>
            <h2 className='section-title'>McMurtry Doubles</h2>
            <p>
                Coming in as new students to McMurtry, you will most likely be placed in doubles
                (a room for two people) with your roommate. We've attached a floor plan of your
                18'x18' to give you an idea of what your room will look like. When you get to your
                room on the first day, there will be a bed, desk, dresser, nightstand, and chair.
                Feel free to move these around as desired!
            </p>
        </Box>

        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[20, 50]} mt={[20, 50]}>
            <h2 className='section-title'>Included Furniture</h2>
            <Image 
                src='../../../static/oweek/room.JPG' 
                alt='McMurtry Room' 
                width={350} 
                className='float-right-img no-rotate' 
                style={{ float: 'right', marginLeft: '30px', marginBottom: '20px' }} 
            />
            <p><strong>Per Person:</strong></p>
            <ul>
                <li>1 Twin XL Sized Bed Frame</li>
                <li>1 Twin XL Sized Mattress</li>
                <li>1 Large Dresser</li>
                <li>1 Small Dresser / Nightstand</li>
                <li>1 Desk</li>
                <li>1 Chair</li>
            </ul>
        </Box>
    </div>
)

export default Room;