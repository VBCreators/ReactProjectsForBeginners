import Card from "./Card"
import leviImg from "./images/levi.webp"
import mikasaImg from "./images/mikasa.jpg"
import "./CardStyle.css"

function CardHolder()
{

    return(
        <>
            <h2 className="ProjectTitle">Card Project</h2>
            
            <div className="CardHolderWrapper">
                
                

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
                    
                <Card />

            </div>
        </>
    );
}



export default CardHolder