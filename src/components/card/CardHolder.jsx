import Card from "./Card"
import leviImg from "./images/levi.webp"
import mikasaImg from "./images/mikasa.jpg"


function CardHolder()
{

    return <>
        <Card 
            name="Levi" 
            address="Beyond the wall" 
            imgName={leviImg}
            />

        <Card 
            name="Mikasa" 
            address="With Eren" 
            imgName={mikasaImg}
            />
            

    </>
}



export default CardHolder