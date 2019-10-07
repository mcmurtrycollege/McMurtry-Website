import Link from 'next/link';
import { Box, Flex, Image } from 'rebass';
import './Sponsor.css';

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
            <p>All donors will have the option to recieve 2 tickets to the event. Reach out to <a href="mailto:mcmurtry@rice.edu">mcmurtry@rice.edu</a> if you have any questions</p>
            <p>Please follow the links below to donate, thank you again for your support!</p>
        </Box>
        {/* <Flex justifyContent='center' flexDirection='row' flexWrap='wrap' className="sponsor-screenshots">
            <Box width={350}>
                <Image src='/static/donor1.png' alt="" />
            </Box>
            <Box width={350}>
                <Image src='/static/donor2.png' alt="" />
            </Box>
        </Flex> */}
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
    </div>
)

export default Sponsor;