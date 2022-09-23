import React from 'react';
import { Box, Flex, Image } from 'rebass';
import './contactcards.css';

const Card = props => (
    < Box className='position-card' width={props.width} >
        <div className="contact-card-content" style={{ height: props.height }}>
            {
                props.photo !== undefined ? (
                    <Image src={props.photo} alt='photo' />
                ) : (
                        null
                    )
            }
            {
                props.position !== undefined ? (
                    <h2 className="position">{props.position}</h2>
                ) : (
                        null
                    )
            }
            <h2 className="name">{props.name}</h2>
            {
                props.phone !== undefined ? (
                    <h3 className="contact-phone"><img src="../../static/icons/phone.svg" alt="Phone: " />{' '}{props.phone}</h3>
                ) : (
                        null
                    )
            }
            {
                props.email !== undefined ? (
                    <a href={`mailto:${props.email}`} className='link'>
                        <h3 className="contact-email"><img src="../../static/icons/email.svg" alt="Email: " />{' '}{props.email}</h3>
                    </a>
                ) : (
                        null
                    )
            }
            {
                props.year !== undefined ? (
                    <h4 className='year'>Year: {props.year}</h4>
                ) : (
                        null
                    )
            }
            {
                props.major !== undefined ? (
                    <h2 className='major'><img src="../../static/icons/file.svg" alt='Major: ' /> {props.major}</h2>
                ) : (
                        null
                    )
            }
            {
                props.subjects !== undefined ? (
                    <h2 className="subjects"><img src="../../static/icons/book.svg" alt='Subjects: ' /> {props.subjects}</h2>

                ) : (
                        null
                    )
            }
            {
                props.room !== undefined ? (
                    <h2 className='room'>Room: {props.room}</h2>
                ) : (
                        null
                    )
            }
            {
                props.pre_prof_path !== undefined ? (
                    <h2 className='pre_prof_path'><img src="../../static/icons/file.svg" alt='Pre-Professional Path: ' /> {props.pre_prof_path}</h2>
                ) : (
                        null
                    )
            }
        </div>
    </Box >
)

const Cards = props => (
    <Box width={[1, 1, 0.9, 0.8]} ml='auto' mr='auto'>
        <Flex flexWrap='wrap' flexDirection='row' justifyContent='center'>
            {
                props.content.map(({ photo, position, name, year, email, phone, major, subjects, room, pre_prof_path }) => (
                    <Card height={props.height} width={props.width} key={name} photo={photo} position={position}
                        name={name} year={year} email={email} phone={phone} major={major} subjects={subjects} room={room}
                        pre_prof_path={pre_prof_path} />
                ))
            }
        </Flex>
    </Box>
)

export default Cards;