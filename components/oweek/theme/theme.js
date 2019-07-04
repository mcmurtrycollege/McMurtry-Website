import { Box, Image } from 'rebass';
import '../oweek.css';
import { runInContext } from 'vm';

const Theme = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>About the Theme</h1>

        <div>
            <Box width={[1, 0.5]} ml='auto' mr='auto' style={{ float: 'left', marginRight: '20px' }}>
                <Image src="../../../static/oweek/2018AdvisingTeam.JPG" alt='' />
            </Box>
            <p>
                Board games are a form of entertainment unique in their ability to rally people of all backgrounds
                and creeds behind the pursuit of a common goal. Board games are able to create meaningful experiences for everyone involved. In any board game, players are able to contribute their own style or
                variations. We believe that similarly, you as New Students will be able to influence and alter the
                many spheres of our college, university, and community with your expansive set of beliefs, morals,
                values, and experiences. Importantly, we believe that O-Week prepares you for your life at Rice,
                but it isn’t the end. We want you to understand that after O-Week, those connections that you
                made will be lasting and impactful to your experience here at Rice. O-Week is just the beginning
                of the story that you will write or the game that you will play that will turn you into the person
                that you aspire to be. A successful board game leaves the players walking away feeling as if they
                have meaningfully spent their time developing new skills and bonding with those around them. In
                the same way, our O-Week will equip you with the tools that will allow you to face your
                academic and social experiences here at Rice and beyond. We can’t wait to see you here
                on campus, as you get ready to embark on one of the most impactful and memorable
                adventures of your life!
            </p>
        </div>
    </div>
)

export default Theme;