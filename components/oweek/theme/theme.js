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
                College is the land of many firsts, far far away from anything that you’ve experienced. As New Students at McMurtry College, you will embrace your strengths, acknowledge your weaknesses, and grow as Rice University students. No student’s journey will be the same as your own, because here at Rice you will forge your own destiny, and create memorable and even life changing experiences. 
            </p>
            <p>
                During Bibbidi Bobbidi BoO-Week you will meet new people, encounter new ideas, and expand your worldview. Just as Cinderella’s fairy godmother transformed a pumpkin into a carriage with a simple “Bibbidi bobbidi boo”, we believe that each and every one of you has the power to alter the many spheres of our college, university, and community with your diverse and expansive set of beliefs, morals, values, and experiences.
            </p>
            <p>
                Your four year fairy tale at Rice will be full of fantasy and whimsy, magic, adventures, and treasure. But as we all know, College cannot be spelled without a couple of Ls. Even fairy tales aren’t without their obstacles. We will all face our own big bad wolves and people eating our porridge, but at the end of the day, our goal is to show you that your college experience will be “just right”
            </p>
            <p>
                One of the most important things we want you to know is don’t be afraid to ask for help: even the bravest of heroes need to be rescued sometimes. During Bibbidi Bobbidi BoO-Week, we want to encourage vulnerability and authenticity every step of the way. We recognize that not every moment can be a fairy tale ball, and for each of us, the clock will inevitably strike midnight (or that 11:59 PM deadline), but we want you all to know that you should never hesitate to ask for help nor to give help in return. No matter the trials and tribulations you may encounter, you won’t be alone, as Rice has an abundance of resources available at your fingertips. Around each corner you will find a helper, like a talking cat, a fairy godmother, someone at the OAA or Wellbeing Center, or even an Advisor or O-Week sibling.
            </p>
            <p>
                In the end, we hope that all of us Murts can write our own stories with the problems we face and successes we embrace, and that, by the end of Bibbidi Bobbidi BoO-Week you will feel closer to your happily ever after.
            </p>
        </div>
    </div>
)

export default Theme;