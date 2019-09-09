import Link from 'next/link';
import './banner.css';

const Banner = () => (
    <div className='banner'>
        <div>
            <div className='banner-line1'>
                <p>Join us on November 1st to celebrate</p>
            </div>
        </div>
        <div>
            <div className='banner-line2'>
                <p>McMurtry's 10th Anniversary!</p>
            </div>
        </div>
        <div>
            <Link href={'/10'}>
                <div className='banner-link'>
                    <p>More Info →</p>
                </div>
            </Link>
        </div>
    </div>
)

export default Banner;