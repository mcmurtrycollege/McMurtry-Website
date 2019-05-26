import React from 'react';
import { Box } from 'rebass';
import './title.css';

const Title = props => (
    // <div className='title-container'>
    <div>
        <Box width={props.width} ml='auto' mr='auto' className='title-container'>
            <h1 className={props.smallText ? ('title-theme2') : ('title-theme1')}>{props.title}</h1>
        </Box>
    </div>
)

export default Title;

// style={{width: props.width}}