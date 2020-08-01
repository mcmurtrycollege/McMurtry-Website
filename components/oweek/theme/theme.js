import { Box, Image } from 'rebass';
import '../oweek.css';
import { runInContext } from 'vm';

const Theme = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>About the Theme</h1>

        <div>
            <Box width={[1, 0.5]} ml='auto' mr='auto' style={{ float: 'left', marginRight: '20px' }}>
                <Image src="../../../static/oweek/2019AdvisingTeam.jpg" alt='' />
            </Box>
            <p>
                We chose to focus this O-Week on game shows because of the ability that game shows have
                to bring people together, as well as highlight different strengths and experiences. There are
                countless game shows out there, but each one has its own objectives and skill sets necessary
                in order to succeed. Additionally, game shows are able to create memorable and even lifechanging 
                experiences for the contestants involved. In a game show, one’s experiences and
                knowledge are crucial in order to succeed. We believe that game shows, in a way, are a metaphor
                for the Rice experience. While the form of a Rice education is relatively uniform across the
                student body, no Rice experience is the same. At Rice, you have the ability to choose your own
                path, and to engage with your own interests and skill sets in order to create your own future. 
            </p>
            <p>
                As New Students and Rice Owls, you have the chance to embrace what makes you unique,
                and channel those experiences and attributes towards a path that you can be proud to walk
                on. However, one of the beauties of game shows is that you rarely go through them alone. We
                believe that one of the most important aspects of your Rice career is being able to recognize
                resources that are available to you, and feel comfortable “phoning a friend” if you need help. 
            </p>
            <p>
                Furthermore, in game shows, no contestant gets every answer right, and that’s okay! With
                Game ShO-Week, we want to encourage vulnerability within everyone involved, because we’re
                not always perfect or happy, but we’re nonetheless worthy of being here! Nobody is alone, and
                it is so important to recognize that it’s okay to share and ask for help, and to give this help in
                return. Finally, game shows are fun! During O-Week and at Rice, we want you to have fun in
                all that you do! We know that these next few years will be ones that you never forget, so we
                encourage you to take risks, challenge yourself, and play to win!
            </p>
        </div>
    </div>
)

export default Theme;