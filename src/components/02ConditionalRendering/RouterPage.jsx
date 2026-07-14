import { use, useState } from "react";
import DynamicPage from "./DynamicPage";
import "./dynamicPageStyle.css"

function Router(){

    const [currentStatus, setCurrentStatus] = useState(true);
    
    const statusButton = () => {
        
        setCurrentStatus(!currentStatus);
        console.log(currentStatus);
        
    };

    
    return(
        <div className="DynamicPageComponent">

            <h2 className="TitleOfLession">Dynamic Page Component Routing</h2>

            <div className="RouterContainer">
                <button className="changeButton" onClick={statusButton}>Change Page</button>
                <DynamicPage currentStatus = {currentStatus} />
            </div>
        </div>
    );
}

export default Router