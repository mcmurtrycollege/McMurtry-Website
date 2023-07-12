import { Box, Image } from 'rebass';
import '../oweek.css';
import { runInContext } from 'vm';

const Theme = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>About the Theme</h1>

        <div>
            <Box width={[1, 0.5]} ml='auto' mr='auto' style={{ float: 'left', marginRight: '20px' }}>
                <Image src="../../../static/oweek/2019AdvisingTeam.jpg" alt='' />
            </Box>
            <p>
                Our mission for BistrO-Week is to equip you with the tools needed to craft your own recipe for success here at McMurtry and within the Rice community. We know that being at Rice can feel like being at a restaurant: there are so many good options to choose from, and even O-Week can feel like a multi-course meal. While this can be overwhelming at times, during BistrO-Week we seek to boil it down to the essentials. We also recognize and appreciate that every chef draws inspiration from their home kitchen and brings with them their own batch of ingredients. We want our incoming Murts to know that all identities and backgrounds are welcome at McMurtry. 
            </p>
            <p>
                These diverse identities and backgrounds will aid you in all of the new meals you'll begin to cook up here at Rice. We are ready and excited to watch you become confident and comfortable here at Rice as you develop new tastes and techniques that will stay with you forever!                       
            </p>
        </div>
    </div>
)

export default Theme;