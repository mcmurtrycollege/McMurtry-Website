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
                In the exhibition of 2025, New Students will enter Rice with a clean slate and the 
                newfound freedom to decide how they wish to paint their future. Our mission for 
                McMurtry’s PicassO-Week is to equip our incoming painters with the palette to 
                transform their blank canvas into an eventual masterpiece - a collage of academic and 
                personal successes that they can treasure for years to come.
            </p>
            <p>
                To create an artwork from scratch, an artist needs to have a plethora of tools at their disposal: 
                a vibrant palette, a diverse array of brushes and pens, and most importantly, an open imagination. 
                These instruments of success are analogous to the values we hope to instill in our new Murts 
                during PicassO-Week: spirit, inclusion, and creativity. 
                Just as we marvel at artworks from across continents, movements, and time periods, 
                we are so excited to admire the variety of beautiful students from all backgrounds 
                curated together in our McMurtry museum.
            </p>
            <p>
                Here at McMurtry, we can’t wait to see the first brush 
                strokes on your canvas of memories, and we hope that the connections and 
                celebrations of O-Week provide inspiration for your artistry. As PicassO-Week begins, 
                don’t forget that your studio is filled with hands-on helpers. A diverse and 
                enthusiastic team of advisors, affiliates, and A-Team members are waiting to model 
                McMurtry’s characteristic spirit and inclusivity. 
            </p>
            <p>
                Although only you can decide how to make your mark at Rice University, 
                remember that you will now always have a place in the gallery we call home: McMurtry.
            </p>
        </div>
    </div>
)

export default Theme;