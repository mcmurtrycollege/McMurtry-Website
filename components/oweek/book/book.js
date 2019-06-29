import '../oweek.css';
import './book.css';

const Book = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>The O-Week Book</h1>
        <div className='oweek-book'>
            <embed src='../../../static/oweekbook.pdf' type="application/pdf" width="600" height="820px" page="7" scrollbar="1" toolbar="1" />
        </div>
    </div>
)

export default Book;