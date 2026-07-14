
import "./dynamicPageStyle.css"

function DynamicPage({currentStatus = true}){
  
    return (
        currentStatus ? <div className="Page1" >This is the First Page</div>
                      : <div className="Page2">This is the Last Page</div>

     );
  
     

}
 
  
export default DynamicPage