import { Box, Flex, Image } from 'rebass';
import '../oweek.css';

const Room = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>Your Room</h1>
        <Flex flexDirection='row' justifyContent='center' flexWrap='wrap'>
            <Box width={[1, 0.4]}>
                <h2 className='oweek-subtitle'>Included Furniture</h2>
                <p>Per Person:</p>
                <ul>
                    <li>1 Twin XL Sized Bed Frame</li>
                    <li>1 Twin XL Sized Mattress</li>
                    <li>1 Large Dresser</li>
                    <li>1 Small Dresser / Nightstand</li>
                    <li>1 Desk</li>
                    <li>1 Deskchair</li>
                </ul>
            </Box>
            <Box width={[1, 0.3]}>
                <Image src='../../../static/oweek/room.jpg' alt='Error Loading Image' />
            </Box>
        </Flex>

        <h2 className='oweek-subtitle'>McMurtry Doubles</h2>
        <p>
            Coming in as new students to McMurtry, you will most likely be placed in doubles
            (a room for two people) with your roommate. We've attached a floor plan of your
            12'x17' to give you an idea of what your room will look like. When you get to your
            room on the first day, there will be a bed, desk, dresser, nightstand, and chair.
            Feel free to move these around as desired!
        </p>

    </div>
)

export default Room;