import React, { useState, useEffect } from 'react';
import { Flex, Box } from 'rebass';
import './documents.css';

const documents = [
    {
        name: "Constitution",
        document: '../../../../static/documents/mcm_constitution_jan_2024.pdf',
        icon: "/static/icons/building.svg"
    },
    {
        name: "General By-Laws",
        document: '../../../../static/documents/mcm_general_bylaws_sep_2025.pdf',
        icon: "/static/icons/file.svg"
    },
    {
        name: "Housing By-Laws",
        document: '../../../../static/documents/mcm_housing_bylaws_jan_2024.pdf',
        icon: "/static/icons/home.svg"
    },
    {
        name: "Parking By-Laws",
        document: '../../../../static/documents/mcm_parking_bylaws.pdf',
        icon: "/static/icons/file.svg"
    },
]

const Documents = () => {
    const [slide, setSlide] = useState(0);
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

    const currentDoc = documents[slide];
        
    return (
        <div className='documents-page'>
            <div className='documents-hero'>
                <h1 className='documents-main-title'>McLegislation</h1>
            </div>
            
            <Flex flexDirection='row' justifyContent='center' flexWrap='wrap' className='documents-tabs'>
                {
                    documents.map((document, index) => (
                        <div 
                            onClick={() => setSlide(index)}
                            className={index === slide ? 'active-doc-tab' : 'inactive-doc-tab'} 
                            key={document.name}
                        >
                            <span className='doc-key'>{document.name}</span>
                        </div>
                    ))
                }
            </Flex>

            <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto' mb={[20, 50]} mt={[10, 20]} px={[0, 0, 'auto', 'auto']} className='pdf-viewer-container'>
                <div className='oweek-book-embed' style={{ height: '100%' }}>
                    <embed 
                        src={`${currentDoc.document}#zoom=${pdfZoom}&toolbar=0&navpanes=0&scrollbar=1`} 
                        type="application/pdf" 
                        width="100%"
                        height="100%"
                    />
                </div>
            </Box>
        </div>
    )
}

export default Documents;