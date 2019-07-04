import { Box, Image } from 'rebass';
import '../oweek.css';

const coords = [
    {
        name: "Emily Duffus",
        year: "Junior",
        major: "Cognitive Sciences, Biochemistry, & Medical Humanities",
        from: "Glen Ridge, NJ",
        image: "../../../static/oweek/EmilyCoord.jpg"
    },
    {
        name: "Edesiri Mushale",
        year: "Junior",
        major: "Mechanical Engineering",
        from: "Vacaville, CA",
        image: "../../../static/oweek/EdesiriCoord.jpg"
    },
    {
        name: "Olivia Morris",
        year: "Junior",
        major: "Cognitive Sciences",
        from: "Tampa, FL",
        image: "../../../static/oweek/OliviaCoord.jpg"
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
            As O-Week Coordinators, it is our job to pour our heart and soul into creating your Orientation Week. We,
            your three Advance To GO-Week Coordinators, have been planning for your arrival since well before you were
            placed in McMurtry. In fact, we have been working since January to select your Advisors and your Co-Advisors. This summer we have prepared this book for you, matched you with a roommate, and carefully placed
            you into an O-Week group. We also planned the majority of O-Week events you will be participating in at
            McMurtry. One of the best things about Rice is that the administration places a great deal of trust in students
            (i.e. us) to run things. In turn, we work extremely hard to make sure that you have a smooth transition into
            Rice, both academically and socially. Your Advisors will be your guides for most of O-Week, but we’ll largely
            be working to make sure everything runs smoothly. We are elated that you will be joining us at McMurtry and
            we are beyond excited to meet you. See you August 18!
</p>
    </div>
)

export default Coords;