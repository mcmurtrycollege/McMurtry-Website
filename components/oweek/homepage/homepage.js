import { Box, Flex, Image } from 'rebass';
import '../oweek.css';

const Coundown = () => {

    var today = new Date();
    console.log(today);
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    let daysToGo = 0;

    if (year === 2019) {
        if (month === 6) {
            daysToGo = 18 + 31 + (30 - day);
        }
        if (month === 7) {
            daysToGo = 18 + (31 - day);
        }
        if (month === 8) {
            daysToGo = (18 - day);
        }
    }

    return (
        <h1 className='oweek-welcome'>{daysToGo} days until O-Week!</h1>
    )
}

const Homepage = () => (
    <div className='oweek-homepage'>
        <Flex flexDirection='row' justifyContent='center' flexWrap='wrap'>
            <Box width={[1, 1 / 3]}>
                <Image src='../../../static/oweek/mcscottishyurt.jpg' alt='' />
            </Box>
            <Box width={[1, 1 / 3]}>
                <Image src='../../../static/oweek/cardmovin.jpg' alt='' />
            </Box>
            <Box width={[1, 1 / 3]} style={{ backgroundColor: '#2B2F3A', opacity: 0.9, marginBottom: '4px' }}>
                <h1 className='oweek-welcome'>Welcome to McMurtry!</h1>
            </Box>
            <Box width={[1, 1 / 3]} style={{ backgroundColor: '#87799C', marginBottom: '4px' }}>
                <h1 className='oweek-welcome'>Advance to Go-Week</h1>
            </Box>
            <Box width={[1, 1 / 3]} style={{ margin: 0, padding: 0 }}>
                <Image src='../../../static/oweek/jumpingCoords.jpg' alt='' />
            </Box>
            <Box width={[1, 1 / 3]}>
                <Image src='../../../static/oweek/colorceleb.jpg' alt='' />
            </Box>
            <Box width={[1, 1 / 3]} style={{ margin: 0, padding: 0 }}>
                <Image src='../../../static/oweek/mcteam.jpg' alt='' />
            </Box>
            <Box width={[1, 1 / 3]}>
                <Image src='../../../static/oweek/building.jpg' alt='' />
            </Box>
            <Box width={[1, 1 / 3]} style={{ backgroundColor: '#2B2F3A', opacity: 0.9, marginBottom: '4px' }}>
                <Coundown/>
            </Box>
        </Flex>
    </div>
)

export default Homepage;