import { Box, Image } from 'rebass';
import '../oweek.css';

const coords = [
    {
        name: "Essence Ratliff",
        pronouns: "(she/her)",
        year: "Junior",
        major: "English w/ Creative Writing Concentration, minor in Anthropology and Sociology",
        from: "Memphis, TN",
        image: "../../../static/oweek/JamesCoord.png"
    },
    {
        name: "Ishani Kaul",
        pronouns: "(she/her)",
        year: "Junior",
        major: "Health Sciences and History, Pre-Law",
        from: "Frisco, TX",
        image: "../../../static/oweek/PrernaCoord.png"
    },
    {
        name: "Marina Klein",
        pronouns: "(they/them)",
        year: "Junior",
        major: "Mathematics and Sociology, minor in Environmental Studies",
        from: "Rockford, IL",
        image: "../../../static/oweek/VidalCoord.png"
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
            <h2 className='oweek-subtitle'>Essence Ratliff</h2>
        </div>
        <p>
            Hi New Murts!! My name is Essence Ratliff, and I’m a Junior here at McMurtry (the best college on campus)!! I’m originally from Memphis, TN, which you’ll probably be able to tell from what many call my “strong Memphian
            accent.” Although Memphis is my hometown, I’ve found myself feeling more at home here at Rice and I hope that you all will too!
        </p>
        <p>
            Here at Rice, I am majoring in English with a Creative Writing Concentration and I am minoring in Anthropology
            and Sociology. Upon entering Rice, I had no idea that I was even slightly interested in Anthropology or Sociology.
            However, after taking a couple of classes in those departments for distribution credit, I quickly fell in love and
            wanted to learn more. Therefore, I want to tell you all that it’s okay if you don’t know what it is you want to do yet, or
            if those things change, because Rice allows you the space and resources to explore several fields until you find THE ONE.
        </p>
        <p>
            Outside of academics, within McMurtry I have served on the Diversity Committee and now as one of the Committee
            Heads for McMurtry’s Black Caucus. While on Diversity Committee I helped plan cultural events, such as the
            Hispanic Heritage Month FITQ (Fridays in the Quad) and the Black History Month FITQ. I am also a member of
            our infamous Powderpuff team, which we are always excited to have new additions to!
        </p>
        <p>
            In my spare time, I love hanging out with my friends and exploring everything Houston has to offer (which you will
            soon see as well)! Some of my hobbies include: crocheting, writing, reading, watching anime, binging the latest
            dating reality tv show, and upgrading my latest pair of Crocs with jibbitz (#ifyouaintcrocinyouaintrockin).
        </p>
        <p>
            But most importantly of all, this year I have the great honor of being one of your O-Week Coordinators. During my
            own O-Week, there were so many different experiences and things I learned that have shaped me into the person
            that I am today, and for that, I will forever be grateful. O-Week helped introduce me to a community of people who
            were all so welcoming and to this day I am still friends with my O-Week siblings and advisors. So we are trying our
            very best (and have been for the past couple of months now) to ensure that O-Week is an experience that you will
            never forget as it’ll be filled with lots of fun activities and beneficial information that will help jumpstart your next
            four years at Rice and Murt!
        </p>
        <p>
            We absolutely cannot wait to meet you all, and please feel free to reach out to us if you ever need anything!
        </p>
        
        <div>
            <h2 className='oweek-subtitle'>Ishani Kaul</h2>
        </div>
        <p>
            Welcome Murts! My name is Ishani Kaul, and I am excited and honored to be one of your
            McCoordinators for BistrO-Week 2023! I’m from Frisco, Texas, but I’ve lived in cities all over
            the country including Los Angeles, Washington D.C., and El Paso. I am so happy to have made
            Houston my home for the past few years and I can’t wait to welcome you to the city and to Rice!
        </p>
        <p>
            I am a rising junior double majoring in Health Sciences and History on the pre-law track. I am
            particularly interested in the intersection of healthcare and policy. I’ve done my fair share of
            exploring when it comes to classes and majors at Rice. If you’re in the same boat, don’t worry!
            Rice has numerous resources for you to utilize in order to find the right path for you.
        </p>
        <p>
            Over the past two years, I have had opportunities to get involved in McMurtry government as the
            head of the Alumni Committee and a Junior representative. Outside of McMurtry, I am involved
            in the Baker Institute for Public Policy and Rice Emergency Medical Services (REMS). I also
            play for the Rice Women’s Club Basketball team and DJ for 96.1 KTRU!
        </p>
        <p>
            Our goal for O-Week is for you to feel welcome and comfortable in your transition to Rice!
            Essence, Marina, and I have been working on planning O-Week for over seven months and we
            hope you enjoy O-Week as much as we have loved coordinating it. Whether you enjoy large,
            hype events or prefer more chill activities, BistrO-Week has something for everyone.
        </p>
        <p>
            As former new students ourselves, we understand the pre-O-Week nerves and are here to help
            ease the transition. Please reach out to us with any questions you may have about O-Week and
            Rice! Once again, congratulations and welcome to McMurtry!
        </p>
        
        <div>
            <h2 className='oweek-subtitle'>Marina Klein</h2>
            <p>
                Welcome to McMurtry everyone!!! My name is Marina Klein, and I am a rising junior at McMurtry! I
                am from Rockford, IL: a small town about 1.5 hours from both Chicago and Madison, WI. However,
                after two years of being in Houston, I can’t help but love the city, the weather, and many people I’ve encountered here.
            </p>
            <p>
                I’m double-majoring in Mathematics and Sociology and minoring in Environmental Studies. That’s
                definitely a mouthful, but all it really means is that I like to learn about patterns (both in a pure sense
                and in a people sense) and how people and the environment affect each other both historically and
                presently. Beyond that, I'm hoping that this trifecta of academic weaponry will help me to solve
                issues of systemic inequality both now and into the future.
            </p>
            <p>
                Although my studies keep me on my toes, I prefer to be on my toes dancing: I’m a member of Rice
                Bhangra! When those beats stop, I keep the music going by playing my French horn in Campanile
                Orchestra.Within McMurtry, you’ll find me serving as a Year-Long PAA as well as the Hall
                Representative for 2O this year! And come Beer Bike, you’ll catch me out on the track putting the
                petal to the metal. Around campus, I work in the Student Success Initiatives (SSI) department as a FLI Ambassador to help 
                plan events and provide support for my fellow First-Generation and/or Low-
                Income students.
            </p>
            <p>
                People have asked me, "what don't you do?" I usually respond with something silly like "eat celery!"
                (it's my dealbreaker food). All jokes aside, though, I make a point to prioritize my friends and fellow
                Murts no matter what else may be going on. On that note, please feel free to reach out to me for any
                reason, at any time! I hope I help can make McMurtry feel like home for you.
            </p>
            <p>
                Get hype for O-Week! See you in August :)
            </p>
        </div>
    </div>
)

export default Coords;