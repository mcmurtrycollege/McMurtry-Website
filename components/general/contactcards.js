import React from 'react';
import { Box, Flex, Image } from 'rebass';
import './contactcards.css';

const Card = props => (
    <Box className='position-card' width={props.width}>
        <div className="contact-card-content" style={{ minHeight: props.minHeight }}>
            {props.photo !== undefined && (
                <Image src={props.photo} alt={`${props.name}'s photo`} />
            )}
            {props.position !== undefined && (
                <h2 className="position">{props.position}</h2>
            )}
            <h2 className="name">{props.name}</h2>
            {props.year !== undefined && (
                <h4 className='year'>Year: {props.year}</h4>
            )}
            {props.phone !== undefined && (
                <h3 className="contact-phone">
                    <img src="../../static/icons/phone.svg" alt="" aria-hidden="true" />
                    <span>{props.phone}</span>
                </h3>
            )}
            {props.email !== undefined && (
                <a href={`mailto:${props.email}`} className='link'>
                    <h3 className="contact-email">
                        <img src="../../static/icons/email.svg" alt="" aria-hidden="true" />
                        <span>{props.email}</span>
                    </h3>
                </a>
            )}
            {props.major !== undefined && (
                <h2 className='major'>
                    <img src="../../static/icons/file.svg" alt="" aria-hidden="true" />
                    <span>{props.major}</span>
                </h2>
            )}
            {props.subjects !== undefined && (
                <h2 className="subjects">
                    <img src="../../static/icons/book.svg" alt="" aria-hidden="true" />
                    <span>{props.subjects}</span>
                </h2>
            )}
            {props.pre_prof_path !== undefined && (
                <h2 className='pre_prof_path'>
                    <img src="../../static/icons/file.svg" alt="" aria-hidden="true" />
                    <span>{props.pre_prof_path}</span>
                </h2>
            )}
        </div>
    </Box>
)

const Cards = props => (
    <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
        <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
            {
                props.content.map(({ photo, position, name, year, email, phone, major, subjects, room, pre_prof_path }) => (
                    <Card 
                        width={props.width}
                        minHeight={props.minHeight}
                        key={`${name}-${position || ''}`} 
                        photo={photo} 
                        position={position}
                        name={name} 
                        year={year} 
                        email={email} 
                        phone={phone} 
                        major={major} 
                        subjects={subjects} 
                        room={room}
                        pre_prof_path={pre_prof_path} 
                    />
                ))
            }
        </Flex>
    </Box>
)

export default Cards;