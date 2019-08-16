import React, { useContext, useEffect } from "react";
import GetContext from "../contexts/GetContext";  
import axios from "axios"; 
import TheSmurfs from "./TheSumrfs.js"; 

const GetSmurfs = (props) => {
    
    const  { getSmurfs }  = useContext(GetContext)
    console.log(getSmurfs)

    useEffect(() => {
        axios 
        .get("http://localhost:3333/smurfs")
        .then(item => {
            console.log(item)
            props.setGetSmurfs(item.data)
        })
        .catch(error => {
            console.log("ERROR", error)
        })
    }, [])
    
    return(
        <div> 
          {getSmurfs.map(item => (
            <TheSmurfs key={item.id} name={ item.name} age={ item.age } height={ item.height } /> 
        ))} 
        </div>
    )
}

export default GetSmurfs; 

