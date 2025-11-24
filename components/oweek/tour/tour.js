import { Box } from 'rebass';
import '../oweek.css';

const Tour = () => (
    <div className='oweek-page'>
        <div className='oweek-hero'>
            <h1 className='oweek-main-title'>Tour of McMurtry</h1>
        </div>

        <Box className='about-text' width={[1, 0.9, 0.8, 0.7]} ml='auto' mr='auto' mb={[10, 10]} mt={[0, 0]}>
            <h2 className='section-title'>McMurtry Double and Facilities Tour</h2>
            
            <div className='oweek-video-container'>
                <div className='oweek-video-wrapper'>
                    <iframe 
                        src="https://www.youtube.com/embed/09bT6qW7mDw" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        title="McMurtry Tour Video"
                    ></iframe>
                </div>
            </div>
            
            <p style={{textAlign: 'center', marginTop: '30px', fontSize: 'var(--font-lg)', fontWeight: '600'}}>
                If you were assigned a single, please email mcmurtryoweek@gmail.com for your room video.
            </p>
        </Box>
    </div>
)

export default Tour;