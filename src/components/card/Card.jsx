import "./CardStyle.css"

function Card({name, address, imgName})
{
    return <div className="visiting-card ">
        <img src={`src/components/card/images/${imgName}`} 
        alt= {`${name}'s Profile pic`}
        className="ProfilePic" />
        <h3>Name: {name}</h3>
        <p>Address: {address}</p>
    </div>

}


export default Card