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

            Here at Rice, I am majoring in English with a Creative Writing Concentration and I am minoring in Anthropology
            and Sociology. Upon entering Rice, I had no idea that I was even slightly interested in Anthropology or Sociology.
            However, after taking a couple of classes in those departments for distribution credit, I quickly fell in love and
            wanted to learn more. Therefore, I want to tell you all that it’s okay if you don’t know what it is you want to do yet, or
            if those things change, because Rice allows you the space and resources to explore several fields until you find THE ONE.

            Outside of academics, within McMurtry I have served on the Diversity Committee and now as one of the Committee
            Heads for McMurtry’s Black Caucus. While on Diversity Committee I helped plan cultural events, such as the
            Hispanic Heritage Month FITQ (Fridays in the Quad) and the Black History Month FITQ. I am also a member of
            our infamous Powderpuff team, which we are always excited to have new additions to!

            In my spare time, I love hanging out with my friends and exploring everything Houston has to offer (which you will
            soon see as well)! Some of my hobbies include: crocheting, writing, reading, watching anime, binging the latest
            dating reality tv show, and upgrading my latest pair of Crocs with jibbitz (#ifyouaintcrocinyouaintrockin).
            But most importantly of all, this year I have the great honor of being one of your O-Week Coordinators. During my
            own O-Week, there were so many different experiences and things I learned that have shaped me into the person
            that I am today, and for that, I will forever be grateful. O-Week helped introduce me to a community of people who
            were all so welcoming and to this day I am still friends with my O-Week siblings and advisors. So we are trying our
            very best (and have been for the past couple of months now) to ensure that O-Week is an experience that you will
            never forget as it’ll be filled with lots of fun activities and beneficial information that will help jumpstart your next
            four years at Rice and Murt! We absolutely cannot wait to meet you all, and please feel free to reach out to us if you ever need anything!
        </p>


        <p> Our goal for O-Week is for you to feel welcome and comfortable in your transition to Rice! We, your three O-Week Coords have been working on planning O-Week for over seven months and we hope you enjoy O-Week as much as we have loved coordinating it. Whether you enjoy large, hype events or prefer more chill activities, BistrO-Week has something for everyone.</p>
    </div>
)

export default Coords;