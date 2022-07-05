import { Box, Image } from 'rebass';
import '../oweek.css';

const coords = [
    {
        name: "James Hwang",
        year: "Junior",
        major: "Biochemistry and Medical Humanities, Pre-Med",
        from: "South Korea",
        image: "../../../static/oweek/JamesCoord.png"
    },
    {
        name: "Prerna Mohan",
        year: "Junior",
        major: "Chemistry and Classical Studies, Pre-Med",
        from: "Summit, NJ",
        image: "../../../static/oweek/PrernaCoord.png"
    },
    {
        name: "Vidal Saenz",
        year: "Junior",
        major: "Bioengineering",
        from: "McAllen, TX",
        image: "../../../static/oweek/VidalCoord.png"
    }
]

const Coords = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>Meet the Coords</h1>
        <div className='oweek-bios'>
            {
                coords.map(({ name, year, major, from, image }) => (
                    <Box width={[1, 0.28]} className='oweek-bio' key={name}>
                        <Box width={0.9} ml='auto' mr='auto'>
                            <Image src={image} alt='Error Loading Image' />
                        </Box>
                        <h3>{name}</h3>
                        <p>{year}</p>
                        <p>{major}</p>
                        <p>{from}</p>
                    </Box>
                ))
            }
        </div>
        <p>
            As O-Week Coordinators, it is our job to pour our heart and soul into creating your Orientation Week. We, your three MysteriO-Week Coordinators, have been planning for your arrival since well before you were placed in McMurtry. In fact, we have been working since January to select your Advisors and your Co-Advisors. This summer, we have prepared this book for you, matched you with a roommate, and carefully placed you into an O-Week group. We also planned the majority of O-Week events you will be participating in at McMurtry. One of the best things about Rice is that the administration places a great deal of trust in students (i.e. us) to run things. In turn, we work extremely hard to make sure that you have a smooth transition into Rice, both academically and socially. Your Advisors will be your guides for most of O-Week, but we’ll largely be working to make sure everything runs smoothly. We are elated that you will be joining us at McMurtry, and we are beyond excited to meet you. See you soon!
        </p>
    </div>
)

export default Coords;