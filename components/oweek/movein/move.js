import { Box, Flex, Image } from 'rebass';
import '../oweek.css';

const Move = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>Arrival and Move In</h1>
        <Flex flexDirection='row' justifyContent='center' flexWrap='wrap'>
            <Box width={[0.8, 0.4]}>
                <Image src="../../../static/oweek/movein.jpg" alt='' />
            </Box>
            <Box width={[0.8, 0.268]}>
                <Image src="../../../static/oweek/arrival.jpg" alt='' />
            </Box>
        </Flex>

        <p>
            Due to Covid-19, Rice is following CDC guidelines for social
            distancing in order to maintain student safety during O-week. Because
            of this, move-in day will look different this year compared to previous
            years. You will receive an email with detailed instructions for move-in
            later this summer that will provide the time and date for your specific
            arrival to Rice.
        </p>
        <h2 className='oweek-subtitle'>Arriving by Car</h2>
        <p>
            <b>From the west on I-10E:</b> Take 610 South to 59 North and exit at Greenbriar. Follow Greenbriar to the light at Rice Boulevard. Turn
            left onto Rice Boulevard. Stay on Rice Boulevard until it becomes Sunset. Turn right on Main Street and
            take an immediate right into Rice campus using entrance #1.
        </p>
        <p>
            <b>From the east on I-10W:</b> Take the US 59 South exit. From US 59 South, take the Fannin Street exit and travel south on Fannin
            until you reach Sunset Boulevard. Take a right on Sunset and an immediate left onto Main Street. Turn
            right into Rice campus using entrance #1.
        </p>
        <p>
            <b>From the south on US-59N:</b> Exit at Greenbriar, stay on the frontage road, and turn right (south) on Greenbriar. Follow Greenbriar
            to the light at Rice Boulevard. Turn left onto Rice Boulevard. Stay on Rice Boulevard until it becomes
            Sunset. Turn right on Main Street and take an immediate right into Rice campus using entrance #1.
        </p>
        <p>
            <b>From the north on US-59S:</b> Take the Fannin Street exit and travel south on Fannin until you reach Sunset Boulevard. Take a right on
            Sunset and an immediate left onto Main Street. Turn right into Rice campus using entrance #1.
        </p>
        <h2 className='oweek-subtitle'>Arriving by Plane</h2>
        <p>
            <b>George Bush (IAH) Airport:</b> Supershuttle (713-523-8888 or supershuttle.com) provides services to and from Intercontinental and
            fare is $33 using discount code OWLS1 for being a Rice student! All departures are
            from the lower level baggage claim (southside area) where they have agents on duty.
        </p>
        <p>
            <b>Houston Hobby (HOU) Airport:</b> The Airport Express also runs to the Medical Center and also leaves every 30 minutes
            starting at 6:10am. The fare is $31 and will take 30-45 minutes. Supershuttle is also available
            at Hobby Airport and costs $31 (again, use code OWLS1).
        </p>
    </div>
)

export default Move;