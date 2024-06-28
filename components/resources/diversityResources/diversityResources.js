import React from 'react';
import Title from '../../general/title';
import { Box } from "rebass";
import Link from 'next/link';
import './diversityResources.css';
import resources from './diversityResources.json';

const WorkOrder = () => (
    <div className='diversity-resources'>
        <Title width={320} title="Diversity Resources" />
        <Link href={"/resources/BlackLivesMatter"}>
            <Box className="blm-banner" width={[0.9, 0.5]}>
                <p>McMurtry College stands with the Black Lives Matter movement &#8594;</p>
            </Box>
        </Link>
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

        {resources.resources.map((section) => (
            <Box key={`C+${resources.resources.indexOf(section)}`}>
                <Box className="diversity-resources-subtitle">
                    <p>{section.title}</p>
                </Box>
                {section.links.map(resource => (
                    <Box className="diversity-resources-links" ml="auto" mr="auto" width={[0.9, 0.6]} key={`C+${section.links.indexOf(resource)}`}>
                        <a href={resource.link}>
                            <Box className="diversity-resources-link" width={[1]}>
                                <p>{resource.descr}</p>
                            </Box>
                        </a>
                    </Box>
                ))}
            </Box>
        ))}
    </div>
)

export default WorkOrder;
