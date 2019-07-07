import Link from 'next/link';
import './banner.css';

const Banner = () => (
    <div className='banner'>
        <div className='banner-line1'>
            <p>Join us on September 14th and 15th to celebrate</p>
        </div>
        <div className='banner-line2'>
            <p>McMurtry's 10th Anniversary!</p>

        </div>
        <div className='banner-link'>
            <Link href={'/mcm10'}>
                <p>More Info →</p>
            </Link>
        </div>
    </div>
)

export default Banner;