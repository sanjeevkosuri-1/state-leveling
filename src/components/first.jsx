import React from "react";

const first=(props)=>{
    return(

        <div>
            <input type="text" 
            name={props.name} onChange={
                (e)=>{
props.setName(e.target.value)
            }
            } />
            <p>{props.name}</p>
        </div>
        
    )
}
export default first