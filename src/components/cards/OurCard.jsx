import React from "react";
export default({img , title , text})=>{
    return(
        <>
        <div>
            <img className="img4-1 w-100 mt-2" src={img} alt="" />
            <p className="p4-1 px-3"> {title} </p>
            <h5 className="mt-2 h5-4-2"> {text} </h5>
        </div>
        </>
    )
    }