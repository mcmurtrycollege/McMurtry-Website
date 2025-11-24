import React, { useState, useEffect } from 'react';
import { Box, Flex } from "rebass";
import Link from 'next/link';
import './diversityResources.css';
import resources from './diversityResources.json';

const DiversityResources = () => {
    const [pdfZoom, setPdfZoom] = useState(95);

    useEffect(() => {
        const updateZoom = () => {
            if (typeof window !== 'undefined') {
                if (window.innerWidth <= 480) {
                    setPdfZoom(40); // Mobile
                } else if (window.innerWidth <= 768) {
                    setPdfZoom(65); // Tablet
                } else {
                    setPdfZoom(85); // Desktop
                }
            }
        };

        updateZoom();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', updateZoom);
            return () => window.removeEventListener('resize', updateZoom);
        }
    }, []);

    return (
        <div className='diversity-resources-page'>
            <div className='dr-hero'>
                <h1 className='dr-main-title'>Diversity Resources</h1>
            </div>

            <div className='dr-center-container'>
                <Link href={"/resources/BlackLivesMatter"}>
                    <div className="blm-banner-card">
                        <h2 className='blm-title'>Black Lives Matter</h2>
                        <p className='blm-subtitle'>McMurtry College stands with the movement &#8594;</p>
                    </div>
                </Link>
            </div>

            <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto' mb={[20, 50]} mt={[10, 20]} px={[0, 0, 'auto', 'auto']}>
                <h2 className='dr-section-title'>McMurtry Resources Guide</h2>
                <div className='pdf-viewer-container'>
                    <div className='oweek-book-embed' style={{ height: '100%' }}>
                        <embed 
                            src={`../../../static/mcmurtry_resources.pdf#zoom=${pdfZoom}&toolbar=0&navpanes=0&scrollbar=1`} 
                            type="application/pdf" 
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
                <div className='doc-link-container'>
                    <a href='../../../static/mcmurtry_resources.pdf' target='_blank' rel="noopener noreferrer" className='dr-download-link'>
                        <img src="/static/icons/file.svg" alt='' />
                        <span>Open Full Guide</span>
                    </a>
                </div>
            </Box>

            {resources.resources.map((section) => (
                <Box key={`C+${resources.resources.indexOf(section)}`} width={[0.95, 0.8]} mx='auto' mb={5}>
                    <div className="dr-subtitle-container">
                        <h2 className="dr-subtitle">{section.title}</h2>
                    </div>
                    
                    <div className="dr-links-grid">
                        {section.links.map(resource => (
                            <a href={resource.link} className="dr-link-card" key={resource.descr} target="_blank" rel="noopener noreferrer">
                                <div className="dr-card-icon">
                                    <img src="/static/icons/link.svg" alt="" onError={(e) => {e.target.src='/static/icons/file.svg'}} />
                                </div>
                                <p className="dr-link-text">{resource.descr}</p>
                            </a>
                        ))}
                    </div>
                </Box>
            ))}
        </div>
    )
}

export default DiversityResources;