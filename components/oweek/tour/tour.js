import '../oweek.css';

const Tour = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>Tour of McMurtry</h1>
        <div>
            <h2 className='oweek-subtitle'>McMurtry Double and Facilities Tour</h2>
        </div>
        <div className='oweek-video-desktop'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/C9R-O-7O7mY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className='oweek-video-mobile'>
            <iframe width="320" height="200" src="https://www.youtube.com/embed/C9R-O-7O7mY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <p style={{textAlign: 'center', marginTop: '50px'}}>If you were assigned a single please email mcmutryoweek@gmail.com for your room video</p>
    </div>
)

export default Tour;