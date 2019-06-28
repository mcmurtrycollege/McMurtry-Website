import Link from 'next/link';
import { Box } from 'rebass';
import { faqs } from './faqs.json';
import './faqs.css';

const Faq = props => (
    <div className='faq-card'>
        <div className='faq-question'>
            <p>Q: {props.question}</p>
        </div>
        <div className='faq-answer'>
            <p>A: {props.answer}</p>
        </div>
    </div>
)

const Faqs = () => (
    <div>
        <Link href='/mcm10'><a className='back-link'>← Back</a></Link>
        <h1 className='faqs-section-title'>FAQs</h1>
        <Box className='faqs-list' width={[0.9, 0.7, 0.6, 0.5]}>
            {
                faqs.map(({question, answer}) => (
                    <Faq question={question} answer={answer} key={question}/>
                ))
            }
        </Box>
    </div>
)

export default Faqs;