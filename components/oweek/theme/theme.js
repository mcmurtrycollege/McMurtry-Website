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
                As you begin your time here as New Students, a large part of your journey is a mystery: full of unknowns that you have yet to uncover. Just like how no case is exactly alike, no student experience will be the same. Each of you comes from different backgrounds and perspectives, with unique approaches to piecing together the clues to solve your own mystery and choose your own path. We believe that by embracing each of your special problem-solving skills, you will be able to create memorable and life-changing experiences. 
            </p>
            <p>
                A crucial element of MysteriO-Week is not being afraid to get some things wrong and make mistakes. During most mystery-solving experiences, detectives have to reassess their first hunches and rethink their approach to solving the mystery. It takes determination to keep pursuing a case until you find the answer. Like these detectives, there may come a time when things do not work out the way you intended and you have to modify your initial plans. Despite these obstacles, we want to encourage you all to persevere and be vulnerable as you continue to make new discoveries about yourself during your college experience.
            </p>
            <p>
                We understand that this journey is not always easy, which is why one of the most important things we want you to know is the support you have all around you. Detectives rarely solve their cases alone, often utilizing external sources to gather more information. Here at Rice, you have access to countless resources, and we want to encourage you to not hesitate to reach out for help and guidance. Sometimes, you will get stuck on a problem or not know how to move forward, and we want you to feel comfortable not only consulting “experts” like the OAA, the McTeam, and your Advisors, but also your fellow “detectives” among the matriculating Class of 2022.
            </p>
            <p>
                We ultimately hope that by the end of MysteriO-Week, you will be more confident solving the mysteries that lie ahead of you so that you can find your own answers as a Murt and Rice Owl!
            </p>
        </div>
    </div>
)

export default Theme;