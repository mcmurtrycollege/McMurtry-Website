import React from 'react';
import Title from '../../general/title';
import './initiativerequest.css';


const InitiativeRequest = () => (
    <div className='initiative-request-page'>
        <Title width={340} title="Initiative Request" />
        <div className='wide-initiative-request-form'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIxEkrO--c-dXURvAl1ogK3LDVLZiQbPPwEPEGI4XnOimzew/viewform" width="700" height="2000" frameBorder="0" scrolling="yes" type="text/javascript" title="Initiatives Request"></iframe>
        </div>
        <div className='narrow-initiative-request-form'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeIxEkrO--c-dXURvAl1ogK3LDVLZiQbPPwEPEGI4XnOimzew/viewform" width="360" height="2000" frameBorder="0" scrolling="yes" type="text/javascript" title="Initiatives Request"></iframe>
        </div>
    </div>
)

export default InitiativeRequest;
