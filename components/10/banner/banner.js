import Link from 'next/link';
import './banner.css';

const Banner = () => (
    <div className='banner'>
        <div className='banner-line1'>
            <p>Join us on October 18th and 19th to celebrate</p>
        </div>
        <div className='banner-line2'>
            <p>McMurtry's 10th Anniversary!</p>

        </div>
        <Link href={'/10'}>
            <div className='banner-link'>
                <p>More Info →</p>
            </div>
        </Link>
    </div>
)

export default Banner;