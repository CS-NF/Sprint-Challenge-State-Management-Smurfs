import React, { useContext, useEffect } from "react"; 
import PostContext from "../contexts/PostContext";
import axios from "axios"; 

const PostSmurfs = (props) => {
    
    const  { postSmurfs }  = useContext(GetContext)

    useEffect(() => {
        axios 
        .post("")
        .then(item => {
            console.log(item)
            props.setPostSmurfs(item.data) 
        })
        .catch(error => {
            console.log("ERROR", error)
        })
    }, [])
    
    return(
        <div> 
            <form>
                <input 
                    test="test"
                    placeholder="Make a Smurfs"
                    name="name"
                    value={props.name}
                    onSubmit={postSmurfs}
                /> 
            </form> 
        </div> 
    )
}

export default PostSmurfs; 