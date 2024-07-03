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
            Congratulations, you’ve made it to Rice! Double congratulations, you are joining McMurtry College, the BEST residential college on campus! 
        </p>
        <p>
            My name is Gale, and I call Shenzhen, China, my home. I left home for the US when I was fourteen, and spent my high school years in Massachusetts before Rice. Here, I study Statistics and Managerial Economics, with the hope of using them for impactful work in the future! Personally, I’ve struggled to find the right major for myself, so it is totally okay if you are coming in not knowing exactly what you want to study.  
        </p>
        <p>
            At Rice, I also sing in the Rice Apollos, the all-male acapella group on campus! I also helped found the Rice Chamber Music Club, where I play the violin and get campus musicians together to work some musical magic. At Murt, I am also your Prime Minister, and I oversee committees that plan lots of fun events! In my spare time, I watch a lot of sports and movies, play video games (recently acquired a PS5), and love a good game of poker. You will soon find your own niche and passions at Rice, too!
        </p>
        <p>
            I am so glad to be your O-Week Coordinator this year alongside Francesca and Sean! We have delicately and intentionally crafted a fun, fulfilling, and meaningful week ahead of you, making sure of a smooth transition for you into college. So, get excited to meet your advisors and other new Murts, and I can’t wait to see y’all!
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
                My name is Sean and I am a junior majoring in Sociology and Health Sciences, minoring in African & African American Studies. I was born and raised in Houston (h-townnn babyyyy), so I know the area around Rice and beyond quite well and I’d be super willing to give you any recs for things to do, places to eat at, etc.
            </p>
            <p>
                Academics-wise, I love learning about how society and the world around me is organized and Blackness in different contexts. I also am really passionate about the social dimensions of health and societal inequalities. Besides that, I’m interested in history, anthropology, and foreign languages & cultures (fun fact: I can speak 2 languages fluently, English & Spanish, and I’m learning/can get around in 2 others, French & Yoruba).
            </p>
            <p>
                On campus, I currently serve as the Director of Community for the Rice African Student Association (RASA), as well as being in the Black Student Association and being a member of the RASA Dance team. I am one of the head RHAs for McMurtry this upcoming year, so you’ll definitely see me around Murt here and there. Additionally, I am involved with the Center for Civic Leadership and DEI here on campus. All that is to say that I am also here if you everrrrr have any questions about ways to get involved on campus.
            </p>
            <p>
                In my free time, I am such a hugeee foodieee as well as spending time with friends, going to museums, watching TV and movies. I also enjoy keeping up with soccer (or football as known by true fans hehe), specifically Premier League and La Liga (loveee Arsenal and FC Barcelona). Lastly, I adoreeee traveling and exploring new places, ask me about my study abroad experiences in Spain, France, Italy, and Costa Rica :)))))
            </p>
            <p>
                I hope you’ve enjoyed reading my cute little bio and I am beyond thrilled to meet you all in August!!!
            </p>
        </div>
    </div>
)

export default Coords;