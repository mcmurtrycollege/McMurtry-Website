import { Box, Image } from 'rebass';
import '../oweek.css';

const coords = [
    {
        name: "Cara Brown",
        pronouns: "(she/her)",
        year: "Junior",
        major: "Chemistry, Art History",
        from: "Phoenix, AZ",
        image: "../../../static/oweek/Caracoord.JPG"
    },
    {
        name: "Carlos Cruz",
        pronouns: "(he/him)",
        year: "Junior",
        major: "Biosciences, Religion",
        from: "Houston, TX",
        image: "../../../static/oweek/Carloscoord.JPG"
    },
    {
        name: "Yazmine Miles",
        pronouns: "(she/her)",
        year: "Junior",
        major: "Sports Medicine and Exercise Physiology",
        from: "Yuma, AZ",
        image: "../../../static/oweek/Yazcoord.JPG"
    }
]

const Coords = () => (
    <div className='oweek-page'>
        <h1 className='oweek-title'>Meet the Coords</h1>
        <div className='oweek-bios'>
            {
                coords.map(({ name, pronouns, year, major, from, image }) => (
                    <Box width={[1, 0.28]} className='oweek-bio' key={name}>
                        <Box width={0.9} ml='auto' mr='auto'>
                            <Image src={image} alt='Error Loading Image' />
                        </Box>
                        <h3>{name}</h3>
                        <p>{pronouns}</p>
                        <p>{year}</p>
                        <p>{major}</p>
                        <p>{from}</p>
                    </Box>
                ))
            }
        </div>

        <div>
            <h2 className='oweek-subtitle'>Cara Brown</h2>
        </div>
        <p>
            You’re walking down the Inner Loop. You see someone wearing a stylish outfit listening to Brat by Charli XCX (with wired headphones, of course) walking to Dell Butcher Hall. You think to yourself, “Who is that?” The little Carlos on your shoulder whispers, “It’s THE Cara Brown!” As the first Ca in CaCaYa, Cara is from Phoenix, AZ, but was born in Austin, TX, so she’s a Texan by birth. As a dual Chemistry and Art History major (you know she had to double it), Cara can do it all: take really aesthetic pictures in Houston’s museums for your Instagram, invent new molecules, and add then drop ANOTHER major in Biosciences.
        </p>
        <p>
            When she’s not dazzling the academic world or running Sunday Sundaes and Fun with Chemistry like the icon she is, you can catch Cara curating a god-tier Spotify playlist, doing elite hauls at Trader Joe’s, or wandering the The Museum of Fine Arts, Houston like she owns the place (she does spiritually). From chemistry research to Powderpuff, she’s got range, and a keen eye for the vibes. If you’re lucky, she’ll take you on a museum date and tell you about her favorite TJ’s snacks on the way.

        </p>
        <p>
            Cara’s energy is something that everyone should experience. She really knows how to bring out the best in you and was tied with Yaz for the first overall pick in the “Someone You Want to Be Friends With” draft in 2025. Whether it be someone to laugh with, confide in, or cry with, Cara is your one-stop shop for it all. Set a timer on your phone until August 17th and put in your Google Calendar “Meet Cara” (and get ready for O-Week while you’re at it). She physically cannot wait to meet you and welcome you to your new home - just like the kind, non-soccer mom caretaker energy she provides!
        </p>
        <p>
            -Carlos Cruz (McMurtry ‘27) and Yazmine Miles (McMurtry ‘27)
        </p>
        
        <div>
            <h2 className='oweek-subtitle'>Carlos Cruz</h2>
        </div>
        <p>
            Somewhere off 610, a Buc-ee’s pajama set just hit the pavement with a volleyball in one hand and a Chipotle chicken al pastor bowl with no toppings in the other. “Who is that?” you may ask. It’s Carlos Cruz radiating main character energy on a casual Tuesday. The middle Ca in CaCaYa (and the heart of the group), Carlos reps Houston with pride (even though he’ll tell you he’s from New York) and is a walking masterclass in how to be the kindest, chillest person alive. He’s the best setter on this side of the net and the friend who will drop everything to make sure you’re okay, probably while handing you a Chaus drink. 
        </p>
        <p> 
            When he’s not being a Murt icon or dominating the volleyball court, Carlos is either boarding a plane for his next adventure, going to the gym (sometimes), curating a vibe-checked playlist featuring Malcolm Todd, Peach Pit, and Dominic Fike, or making a spontaneous Panda Express run that somehow turns into a core memory. He’s a connoisseur of good times and great convos, with a sixth sense for knowing exactly when the group needs a laugh, a jam session, or a spontaneous hang.
        </p>
        <p>
            Carlos is your hype man, your safe space, and the reason O-Week will feel like home before you even unpack. Whether it’s a 2 a.m. heart-to-heart or a spontaneous trip to get fries from Whataburger and talk about life, Carlos is always down, and you’ll be so glad he is.

        </p>
        <p>
           -Yazmine Miles (McMurtry ‘27) and Cara Brown (McMurtry ‘27)
        </p>
       
        
        <div>
            <h2 className='oweek-subtitle'>Yazmine Miles</h2>
            <p>
                A hot new bombshell just entered the villa, and her name starts with Y and ends in azmine! Yaz “Lil Puff” Miles is the Ya in CaCaYa, and she comes all the way from Yuma, a border town in Arizona. Speaking of towns, Yaz is also a dual-citizen of FunnyVille - Population: 1. When you’re blessed with her presence, count down the seconds it will take for you to burst into laughter. Even though she’s not as funny as Carlos, she is probably better in every other possible way! As a Sports Medicine major, Yaz’s kindness shines as she hopes to take care of her co-coords when we’re older. Right, Yaz?
            </p>
            <p>
                When she’s not saving the world one Rice 360 project at a time or running Murt like a boss (seriously, she is the McMinistry), you can find Yaz rewatching Dance Moms with Olympic-level passion and generating perfect PicassO-Week graphics with ChatGPT. She’s got J. Cole in her ears, fire in her soul, and sunglasses on her face (do y’all want to see the 0.5 pictures??).
            </p>
            <p>
                On move-in day during BistrO-Week 2023, we remember seeing someone confident, hilarious, and kind - an immediate friend crush. You truly are not going to meet someone else with as big of a heart as Yaz (unless their names are Cara or Carlos). We are so excited to see you meet Yaz because she is someone you cannot and don’t want to forget. Yaz is unbelievably ecstatic to see y’all, so start packing for O-Week!!!
            </p>
            <p>
                -Cara Brown (McMurtry ‘27) and Carlos Cruz (McMurtry ‘27)
            </p>
        </div>
    </div>
)

export default Coords;