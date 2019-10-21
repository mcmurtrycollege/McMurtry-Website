import Link from 'next/link';
import { Box, Flex, Image } from 'rebass';
import './Sponsor.css';
import { ourSponsors } from './sponsors.json';

const tiers = [
    {
        name: "Purple and Silver Sponsor",
        amount: "$250",
        link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
    },
    {
        name: "Coat of Arms Sponsor",
        amount: "$500",
        link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
    },
    {
        name: "Cookie Defense Sponsor",
        amount: "$1,000",
        link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
    },
    {
        name: "Conch Wielder Sponsor",
        amount: "$2,500",
        link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
    },
    {
        name: "Highland Champion",
        amount: "$5,000",
        link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
    },
    {
        name: "Burt and DeeDee McMurtry Sponsor",
        amount: "$10,000",
        link: "https://riceconnect.rice.edu/donation/mcmurtry-college"
    }
]

const Sponsor = () => (
    <div className="sponsor-page">
        <Link href='/10'><a className='back-link'>← Back</a></Link>
        <h1 className='support-mcm'>Support McMurtry</h1>
        <Box width={[0.8, 0.6]} ml='auto' mr='auto' className='mcm10-message' mt={50}>
            <p>Dear Donors,</p>
            <p>Thank you for your willingness to support McMurtry, your generosity makes events like these possible, and will let us do even more to help the students in our college.</p>
            <p>All donors will have the option to recieve 2 tickets to the event. Reach out to <a href="mailto:mcmurtry@rice.edu" target="_blank" rel="noopener noreferrer">mcmurtry@rice.edu</a> if you have any questions</p>
            <p>Please follow the links below to join one of the sponsorship tiers.  To give in any denomination of your choosing, please click this <a href="https://riceconnect.rice.edu/donation/mcmurtry-college">link</a>.  Thank you again for your support!</p>
        </Box>
        <div className='sponsor-tiers'>
            {
                tiers.map(({ name, amount, link }) => (
                    <div className='tier' key={name}>
                        <p className='tier-name'>{name}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <p className='tier-amount'>{amount}</p>
                            <div className='donate-btn'>
                                Donate Now
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
        <h1 className='our-sponsors'>Thank you to our sponsors!</h1>
        <Box width={[0.9, 0.5]} ml='auto' mr='auto'>
            <Flex flexDirection='row' flexWrap='wrap' justifyContent='center'>
                {
                    ourSponsors.map(name => (
                        <h2 className='our-sponsor'>{name}</h2>
                    ))
                }
            </Flex>
        </Box>
    </div>
)

export default Sponsor;