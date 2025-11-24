import { Box } from 'rebass';
import { useState, useEffect } from 'react';
import '../oweek.css';

const Book = () => {
    const [pdfZoom, setPdfZoom] = useState(95);

    useEffect(() => {
        const updateZoom = () => {
            if (window.innerWidth <= 480) {
                setPdfZoom(40); // Mobile - much smaller
            } else if (window.innerWidth <= 768) {
                setPdfZoom(65); // Tablet - smaller
            } else {
                setPdfZoom(85); // Desktop - smaller
            }
        };

        updateZoom();
        window.addEventListener('resize', updateZoom);
        return () => window.removeEventListener('resize', updateZoom);
    }, []);

    return (
        <div className='oweek-page'>
            <div className='oweek-hero'>
                <h1 className='oweek-main-title'>The O-Week Book</h1>
            </div>

            <Box width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[0, 0]}>
                <div className='oweek-book-buttons'>
                    <a href='../../../static/oweek/oweekbook-2025.pdf' download='McMurtry-OWeek-Book-2025.pdf' className='oweek-book-button'>
                        <span>Download O-Week Book</span>
                    </a>
                    <button onClick={() => window.open('../../../static/oweek/oweekbook-2025.pdf', '_blank').print()} className='oweek-book-button'>
                        <span>Print O-Week Book</span>
                    </button>
                </div>
            </Box>

            <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto' mb={[20, 50]} mt={[10, 20]} px={[0, 0, 'auto', 'auto']} className='oweek-book-container'>
                <div className='oweek-book-embed'>
                    <embed src={`../../../static/oweek/oweekbook-2025.pdf#zoom=${pdfZoom}&toolbar=0&navpanes=0&scrollbar=1`} type="application/pdf" />
                </div>
            </Box>
        </div>
    );
}

export default Book;