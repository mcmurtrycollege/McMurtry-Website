import { Box, Flex, Image } from 'rebass';
import '../oweek.css';

const Coundown = () => {

    var today = new Date();
    var oweek = new Date(2019, 8, 18, 0, 0, 0)

    var daysToGo = (oweek - today) / (24 * 60 * 60 * 1000)

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