import React from "react"; 
import GetSmurfs from "./GetSmurfs";

const TheSmurfs = (props) => {
    return(
    <> 
     <h3> name: { props.name } </h3> 
     <p> age: { props.age } </p>
     <p> height: { props.height } </p>  
    </> 
    )
}

export default TheSmurfs; 

// export const GetObject = {
//   name: "Something", 
//   age: 25, 
//   height: 5.10, 
//   id: 1
// }