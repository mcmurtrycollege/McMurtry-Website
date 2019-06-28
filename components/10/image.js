import { Box } from 'rebass';

const Image = (props) => (
    <div className='image'>
        <Box className={`image-box${props.index}`} width={350}>
            <p className='image-caption'>{props.caption}</p>
        </Box>
        <style>{`
            .image-box${props.index} {
                position: relative;
                color: #DCDFE5;
                overflow: hidden;
                height: 100%;
            }
            
            .image-box${props.index}:after {
                position: absolute;
                content: "";
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #2B2F3A;
                opacity: 0;
                z-index: -1;
                transition: 0.3s ease-in-out;
            }
            
            .image-box${props.index}:hover:after {
                opacity: 0.8;
            }
            
            .image-box${props.index}:hover:before {
                transform: scale(1.3);
            }
            
            .image-box${props.index}:hover .image-caption {
                opacity: 1;
            }

            .image-box${props.index}:active:after {
                opacity: 0.8;
            }
            
            .image-box${props.index}:active:before {
                transform: scale(1.3);
            }
            
            .image-box${props.index}:active .image-caption {
                opacity: 1;
            }

            .image-box${props.index}:before {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0; 
                left: 0;
                z-index: -1;
                background-image: url(${props.image});
                background-position: center;
                transition: 0.3s ease-in-out;
                background-size: cover;
            }
            
            .image-caption {
                text-align: center;
                padding-top: 70px;
                width: 70%;
                margin-left: auto;
                margin-right: auto;
                opacity: 0;
                transition: 0.3s ease-in-out;
                font-size: 1.3em;
            }
        `}</style>
    </div>
)

export default Image;