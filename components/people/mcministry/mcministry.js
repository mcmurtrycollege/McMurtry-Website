import React from 'react';
import { Box } from 'rebass';
import './mcministry.css';
import Cards from '../../general/contactcards';
import { executive_council, peoples_council, mccabinet } from './mcministry.json';

export default class McMinistry extends React.Component {
    render() {
        return (
            <div className='mcministry-page'>
                <div className='mcministry-hero'>
                    <h1 className='mcministry-main-title'>McMinistry</h1>
                </div>
                <Box width={[330]} ml='auto' mr='auto'>
                    <h2 className='division-title'>Executive Council</h2>
                </Box>
                <Cards content={executive_council} width={[270]} />
                <Box width={270} ml='auto' mr='auto'>
                    <h2 className='division-title'>McCabinet</h2>
                </Box>
                <Cards content={mccabinet} width={[300]} />
                <Box width={300} ml='auto' mr='auto'>
                    <h2 className='division-title'>People's Council</h2>
                </Box>
                <Cards content={peoples_council} width={[270]} />
            </div>
        )
    }
}