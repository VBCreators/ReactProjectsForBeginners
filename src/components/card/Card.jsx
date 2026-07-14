import "./CardStyle.css"
import PropTypes from 'prop-types'
import defaultImg from './images/default-profile.webp'

function Card({name="No Name", address="Inside wall Maria", imgName = defaultImg,})
{
    return ( <div className="visiting-card ">
        <img src={imgName} 
        alt= {`${name}'s Profile pic`}
        className="ProfilePic" />
        <h3>Name: {name}</h3>
        <p>Address: {address}</p>
        
    </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    imgName: PropTypes.string
}



export default Card