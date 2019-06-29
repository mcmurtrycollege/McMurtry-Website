import * as Scroll from 'react-scroll';
import { Element } from 'react-scroll';
import '../oweek.css';
import './groups.css';
import { oweek_groups } from './groups.json';

const Groups = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>The O-Week Groups</h1>
        <div>
            <h2 className='oweek-subtitle'>What is an O-Week Group?</h2>
        </div>
        <p>
            Your O-Week group consists of 8-9 other New Students, 4 upperclassmen Advisors (one will be a
            Co-Advisor and one may be an Affiliate) who are beyond excited to welcome you to the best residential college on campus! All throughout O-Week, you will be preparing for
            registration and academic life at Rice and interacting with the rest of your incoming class at McMurtry, but your O-Week group is designed primarily to give you more of a personal
            support system during the week and throughout the year. From playing crazy ice-breakers, learning about each other’s interests and passions, sharing possible course schedules, or making late
            night food runs, you will soon discover that your bond as an O-Week group runs deep. Be prepared
            for lots of fun & encouragement from the peers in your group. Don’t be worried if your Advisors
            seem very enthusiastic when you drive up for move in day -- it’s a sign of affection.
        </p>
        <h2 className='oweek-subtitle'>What is an Advisor?</h2>
        <p>
            Advisors are a diverse group of students from McMurtry who are so enthusiastic about welcoming
            you to Rice that they don’t mind returning here almost two full weeks before classes start to help
            you move in and start your time at Rice! These fantastic people have been hand-selected to act as
            your guides throughout O-Week; they’ll make sure you get to all activities and meetings, answer
            any questions you might have (or direct you to someone who can answer them), expose you to
            Rice’s academics and student life, introduce you to the McMurtry culture, and serve as all-around
            resources. One thing that all Advisors have in common is their desire to help you have the best
            experience possible at Rice, so they’ll continue to be resources for you long after O-Week is over
            and may very well become some of your closest friends.
        </p>
        <h2 className='oweek-subtitle'>What is a Co-Advisor?</h2>
        <p>
            Co-Advisors make up about a fourth of our team and are students who are equally friendly and
            enthusiastic about welcoming you to Rice, but they hail from other residential colleges!
            Co-Advisors love McMurtry so much that they choose to join McMurtry’s O-Week as an
            ambassador of their home college. In addition to having the qualities of an Advisor, they can help
            show you Rice beyond the beautiful wood-panels of McMurtry and bring a little bit of their own
            college’s culture and customs along with them. They are wonderful resources in
            helping you to branch out and explore other colleges!
        </p>
        <h2 className='oweek-subtitle'>What is an Affiliate?</h2>
        <p>
            Affiliates are O-Week personnel who serve specific roles designed to help you with your
            transition to Rice. Most O-Week groups will have at least one Affiliate. While they are paired with
            individual groups, they are an important resource for all New Students at the college. The Affiliate
            assigned to your group may often be floating around to meet other students and providing them
            with specialized knowledge and advice. Be sure to meet all the Affiliates present, as they are incredibly important campus-wide resources during O-Week and beyond. These Affiliate positions
            include: Peer Academic Advisors, Diversity Facilitators, Photographer, Videographer, Gopher, Rice
            Health Advisor, Associates Liaison, Athletic Liaison, Student Maintenance Representative, Chief
            Justice, and President.
        </p>
        <h2 className='oweek-subtitle'>Find Your O-Week Group!</h2>
        <div className='oweek-groups-links'>
            {
                oweek_groups.map(({ name }) => (
                    <Scroll.Link to={name} smooth={true} duration={400} key={name}>
                        <div className='oweek-group-link'>
                            {name}
                        </div>
                    </Scroll.Link>
                ))
            }
        </div>
        <div className='oweek-groups'>
            {
                oweek_groups.map(({ name, advisors }) => (
                    <Element name={name} key={name}>
                        <div className='oweek-group'>
                            <h2 className='oweek-title'>{name}</h2>
                            <div className='oweek-bios'>
                                {
                                    advisors.map(({ name, year, major, from }) => (
                                        <div className='advisor-bio' key={name}>
                                            <h3>{name}</h3>
                                            <p>{year}</p>
                                            <p>{major}</p>
                                            <p>{from}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Element>
                ))
            }
        </div>
    </div>
)

export default Groups;