import Link from 'next/link';
import { Box, Flex, Image } from 'rebass';
import './Sponsor.css';

const tiers = [
    {
        name: "Purple and Silver Sponsor",
        amount: "$250",
        link: "https://riceconnect.rice.edu/giving"
    },
    {
        name: "Coat of Arms Sponsor",
        amount: "$500",
        link: "https://riceconnect.rice.edu/giving"
    },
    {
        name: "Cookie Defense Sponsor",
        amount: "$1,000",
        link: "https://riceconnect.rice.edu/giving"
    },
    {
        name: "Conch Wielder Sponsor",
        amount: "$2,500",
        link: "https://riceconnect.rice.edu/giving"
    },
    {
        name: "Highland Champion",
        amount: "$5,000",
        link: "https://riceconnect.rice.edu/giving"
    },
    {
        name: "Burt and DeeDee McMurtry Sponsor",
        amount: "$10,000",
        link: "https://riceconnect.rice.edu/giving"
    }
]

const Sponsor = () => (
    <div className="sponsor-page">
        <Link href='/10'><a className='back-link'>← Back</a></Link>
        <h1 className='support-mcm'>Support McMurtry</h1>
        <Box ml='auto' mr='auto' width={[1, 0.6]} className="sponsor-instructions">
            <ol>
                <li>Click "Become a Sponsor" on one of the sponsorship levels below to be directed to the Rice University secure giving site.</li>
                <li>
                    After filling in your personal and contact information, fill in the donation information as follows:
                    <ul>
                        <li>In the "Amount" box near the bottom of the form, enter the amount of your sponsorship</li>
                        <li>In the "Designation" box next to that, use the drop-down menu and select "Other"</li>
                        <li>In the “Special Instructions” box (appears after clicking add donation), type: McMurtry College 10th Anniversary Fund (G83450-5053000)</li>
                    </ul>
                </li>
            </ol>
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