import { Image } from 'rebass';
import './flip.css';

const FlipCard = (props) => (
    <div className='flipcard'>
        <div className='front'>
            {/* <Image src='../../../static/mcm_commons.jpg' alt="" /> */}
            <Image src={props.img} alt="" />
        </div>
        <div className='back'>
            <p>this is the back</p>
        </div>
    </div>
)

export default FlipCard;