import { Box, Image } from 'rebass';
import '../oweek.css';

const coords = [
    {
        name: "Gale Gai",
        pronouns: "(he/him)",
        year: "Junior",
        major: "Statistics and Managerial Economics",
        from: "Shenzhen, China",
        image: "../../../static/oweek/GaleCoord.JPG"
    },
    {
        name: "Francesca Nemati",
        pronouns: "(she/her)",
        year: "Junior",
        major: "Computer Science and Neuroscience",
        from: "New York, NY",
        image: "../../../static/oweek/FrancescaCoord.JPG"
    },
    {
        name: "Sean Nyangeri",
        pronouns: "(he/him)",
        year: "Junior",
        major: "Sociology, Health Sciences, and African & African American Studies",
        from: "Houston, TX",
        image: "../../../static/oweek/SeanCoord.JPG"
    }
]

const Coords = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>Meet the Coords</h1>
        <div className='oweek-bios'>
            {
                coords.map(({ name, pronouns, year, major, from, image }) => (
                    <Box width={[1, 0.28]} className='oweek-bio' key={name}>
                        <Box width={0.9} ml='auto' mr='auto'>
                            <Image src={image} alt='Error Loading Image' />
                        </Box>
                        <h3>{name}</h3>
                        <p>{pronouns}</p>
                        <p>{year}</p>
                        <p>{major}</p>
                        <p>{from}</p>
                    </Box>
                ))
            }
        </div>

        <div>
            <h2 className='oweek-subtitle'>Gale Gai</h2>
        </div>
        <p>
            COMING SOON!
        </p>
        
        <div>
            <h2 className='oweek-subtitle'>Francesca Nemati</h2>
        </div>
        <p>
            Hi new Murts! It’s almost time to welcome you into college and into our amazing McMurtry family!
        </p>
        <p> 
            My name is Francesca and I am one of your AstrO-Week 2024 Coordinators. I am a junior studying 
            Computer Science with a minor in Neuroscience. I am originally from New York, NY so coming to Texas 
            was a bit of a change for me, but I fell in love with Rice and I am so happy to be here and I am 
            honored to be representing McMurtry to all of you guys!
        </p>
        <p>
            Academically, I am passionate about Computer Science and developing my skills as a coder. In 
            addition, I am interested in a variety of other subjects, including natural sciences and 
            humanities. My minor in Neuroscience has allowed me to take classes in the Neuroscience and 
            Biology departments that fuel my love for science. Further, I am a history and art history nerd. 
            I can talk to you all day about life in the Middle Ages, the chronology of twentieth century 
            Europe, or the details and symbolism of Jan Van Eyke’s paintings. 
        </p>
        <p>
            Outside of classes, I have participated in research on campus in the Computer Science department 
            working on a project related to computational biology. This fall will also be my third semester 
            as a teaching assistant for COMP 140, so perhaps you will catch me in class or hosting one of my 
            office hour sessions in McMurtry commons. Another thing I do on campus is my role as Photo Editor 
            for the Rice Thresher. Make sure to check out the paper every week, available in commons. 
        </p>
        <p>
            My hobbies include photography, baking, playing sports, going to museums, shopping, and spending 
            time with friends. In my spare time, I enjoy watching baseball and those home renovation shows.
        </p>
        <p>
            Gale, Sean, and I have been working hard for months to plan this week for you all and we hope to 
            make it as fun and rewarding as possible. I am super excited to meet all of you guys and I hope 
            your transition to college is exciting and enjoyable. 
        </p>
        <p>
            See you so soon!
        </p>
        
        <div>
            <h2 className='oweek-subtitle'>Sean Nyangeri</h2>
            <p>
                COMING SOON!
            </p>
        </div>
    </div>
)

export default Coords;