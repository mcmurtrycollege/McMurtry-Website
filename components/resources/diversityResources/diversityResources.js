import React from 'react';
import Title from '../../general/title';
import './diversityResources.css';

const WorkOrder = () => (
    <div className='diversity-resources'>
        <Title width={320} title="Diversity Resources" />
        <div className='embedded-doc'>
            <embed src='../../../static/mcmurtry_resources.pdf' type="application/pdf" width="600" height="820px" page="7" scrollbar="1" toolbar="1" />
        </div>
        <div className='doc-link-container'>
            <a href='../../../static/mcmurtry_resources.pdf' target='_blank' rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className='doc-link'>
                    <img src="https://icon.now.sh/public/2B2F3A/90" alt='' />
                    <p>Diversity Resources <img src="https://icon.now.sh/open_in_new/2B2F3A/13" alt='' /></p>
                </div>
            </a>
        </div>
    </div>
)

export default WorkOrder;
