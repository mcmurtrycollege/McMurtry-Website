import React from 'react';
import { Box, Image } from 'rebass';
import Link from 'next/link';
import './mcmLogo.css';

const McmLogo = () => (
    <div>
        <div className='mcm-crest' id='mcm-header'>
            <Box width={[0.7, 0.5, 0.5, 0.3]} ml='auto' mr='auto' pt={0.1} className='mcm-crest-link'>
                <Link href='/'>
                    <Image src='../static/McmCrest.svg' alt="McMurtry Crest" />
                </Link>
            </Box>
        </div>
    </div>
)

export default McmLogo;