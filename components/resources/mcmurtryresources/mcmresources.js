import React from 'react';
import Title from '../../general/title';
import './mcmresources.css';

// import mcmResources from '../../../../static/mcmurtry_resources.pdf'

const McmResources = () => (
    <div className='mcm-resources-page'>
        <Title width={280} title="McMurtry Resources" />
        <div className='wide-mcm-resources-pdf'>
            <embed src='../../../../static/mcmurtry_resources.pdf' type="application/pdf" width="600" height="820px" page="3" scrollbar="1" toolbar="1" />
        </div>
        <div className='narrow-mcm-resources-pdf'>
            <embed src='../../../../static/mcmurtry_resources.pdf' type="application/pdf" width="360" height="820px" page="3" scrollbar="1" toolbar="1" />
        </div>
    </div>
)

export default McmResources;