import React from 'react';
import Title from '../../general/title';
import './initiativerequest.css';


const InitiativeRequest = () => (
    <div className='initiative-request-page'>
        <Title width={340} title="McFUNd" />
        <div className='wide-initiative-request-form'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdHfWng8IW37QGSMz9lObCNHCRC1ifZjGxola_7udR-4A-f-Q/viewform?usp=sf_link" width="700" height="2000" frameBorder="0" scrolling="yes" type="text/javascript" title="McFUNd Request"></iframe>
        </div>
        <div className='narrow-initiative-request-form'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdHfWng8IW37QGSMz9lObCNHCRC1ifZjGxola_7udR-4A-f-Q/viewform?usp=sf_link" width="360" height="2000" frameBorder="0" scrolling="yes" type="text/javascript" title="McFUNd Request"></iframe>
        </div>
    </div>
)

export default InitiativeRequest;