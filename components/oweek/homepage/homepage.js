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
        <div className='oweek-countdown'>
            <p>{daysToGo} until O-Week!</p>
        </div>
    )
}

const Homepage = () => (
    <div className='oweek-page'>
        <h1 className='oweek-welcome'>Welcome to McMurtry!</h1>
        <Coundown />
    </div>
)

export default Homepage;