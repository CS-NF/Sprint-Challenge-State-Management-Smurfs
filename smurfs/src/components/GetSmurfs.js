import React, { useContext, useEffect } from "react";
import GetContext from "../contexts/GetContext";  
import axios from "axios"; 
import TheSmurfs from "./TheSumrfs.js"; 

const GetSmurfs = () => {
    
    const  { smurfs, setSmurfs }   = useContext(GetContext)

    useEffect(() => {
        axios 
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            setSmurfs(res.data)
        })
        .catch(error => {
            console.log("ERROR", error)
        })
    }, [])
    
    return(
        <div> 
          {smurfs.map(item => (
            <TheSmurfs key={item.id} name={ item.name} age={ item.age } height={ item.height } /> 
        ))} 
        </div>
    )
}

export default GetSmurfs; 

