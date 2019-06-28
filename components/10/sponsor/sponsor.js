import Link from 'next/link';
import './Sponsor.css';

const tiers = [
    {
        name: "Level 1",
        amount: "$100",
        link: ""
    },
    {
        name: "Level 2",
        amount: "$200",
        link: ""
    },
    {
        name: "Level 3",
        amount: "$300",
        link: ""
    },
    {
        name: "Level 4",
        amount: "$400",
        link: ""
    }
]

const Sponsor = () => (
    <div>
        <Link href='/mcm10'><a className='back-link'><img src="https://icon.now.sh/arrow/left/2B2F3A/15" alt=""/>{' '}Back</a></Link>
        <h1 className='support-mcm'>Support McMurtry</h1>
        <div className='sponsor-tiers'>
            {
                tiers.map(({name, amount, link}) => (
                    <div className='tier' key={name}>
                        <p className='tier-name'>{name}</p>
                        <p className='tier-amount'>{amount}</p>
                        <div className='donate-btn'>
                            <a href={link}>Donate Now</a>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)

export default Sponsor;