import Link from 'next/link';
import { Box, Flex, Image } from 'rebass';
import './Sponsor.css';

const tiers = [
    {
        name: "Level 1",
        amount: "$100",
        link: "https://riceconnect.rice.edu/giving"
    },
    {
        name: "Level 2",
        amount: "$200",
        link: "https://riceconnect.rice.edu/giving"
    },
    {
        name: "Level 3",
        amount: "$300",
        link: "https://riceconnect.rice.edu/giving"
    },
    {
        name: "Level 4",
        amount: "$400",
        link: "https://riceconnect.rice.edu/giving"
    }
]

const Sponsor = () => (
    <div className="sponsor-page">
        <Link href='/mcm10'><a className='back-link'>← Back</a></Link>
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
        <Flex justifyContent='center' flexDirection='row' flexWrap='wrap' className="sponsor-screenshots">
            <Box width={350}>
                <Image src='/static/donor1.png' alt="" />
            </Box>
            <Box width={350}>
                <Image src='/static/donor2.png' alt="" />
            </Box>
        </Flex>
        <div className='sponsor-tiers'>
            {
                tiers.map(({ name, amount, link }) => (
                    <div className='tier' key={name}>
                        <p className='tier-name'>{name}</p>
                        <p className='tier-amount'>{amount}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer">
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