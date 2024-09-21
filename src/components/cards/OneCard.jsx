import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
export default({icon , count , title , pragraf})=>{ 
    Aos.init();
    return( 
        <>
                <div  data-aos="fade-up"data-aos-duration="1200" className=" p-3 mt-5">
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <h1>{icon}</h1>
                    <h1 className="mt-2 px-2 num" data-val="500"><b>{count}</b></h1>
                </div>
                   <h4 className="mt-3"><b>{title}</b></h4>
                   <p style={{color:"gray"}} className="text-center">{pragraf}</p>
                </div>
        </>
    )
}