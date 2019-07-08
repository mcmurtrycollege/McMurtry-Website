import '../oweek.css';

const Book = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>The O-Week Book</h1>
        <div className='oweek-book'>
            <embed src='../../../static/oweekbook.pdf' type="application/pdf" width="600" height="820px" page="7" scrollbar="1" toolbar="1" />
        </div>
        <a href='../../../static/oweek/oweekbook.pdf' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div className='oweek-book-download'>
                <img src="https://icon.now.sh/file_download/DCDFE5/60" alt="" />
                <p>The O-Week Book</p>
            </div>
        </a>
    </div>
)

export default Book;