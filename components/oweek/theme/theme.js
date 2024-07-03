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
                Welcome to McMurtry’s AstrO-Week 2024, where we embark on a cosmic journey among the celestial wonders that have fascinated us for millennia! Just as stars align in the vast expanse of the universe, so too do the unique paths of our New Students converging at Rice, and more specifically, at McMurtry.
            </p>
            <p>
                AstrO-Week invites New Students from all backgrounds to illuminate their perspectives and passions as diverse as the characteristics of the zodiac signs. Together, we hope to bring them in joining McMurtry’s constellation full of memories as timeless as the night sky! 
            </p>
            <p>
                Throughout this cosmic week, we will be the guiding light for our new students as they embark on a journey to chart their own paths to personal and academic success, providing them with the resources and support along the way. We aspire to facilitate lifelong connections and raise New Students up to new heights as they pursue their dreams!
            </p>
        </div>
    </div>
)

export default Theme;