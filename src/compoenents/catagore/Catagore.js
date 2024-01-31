import React, { useEffect ,useState} from "react";
import { Link } from "react-router-dom";

function Catagore() {
    const [Catagores, setCatagore] = useState([]);
   

    useEffect(() => {
              fetch('https://fakestoreapi.com/products/categories')
        .then((res)=>res.json())
        .then((data)=>setCatagore(data));
        },[]);
         
    return(<>
    
            <div className="container-fluid mt-4 border-bottom " >
               <ul className="d-flex justify-content-around flex-wrap">
               {Catagores.map((Catagore) => {
               return (<li  key={Catagore}><Link to={`/category/${Catagore}`} >{Catagore}  </Link> </li>)
               })}
                </ul>  
            </div>
           {/*  */}
            
           
           </> )
}

export default Catagore;