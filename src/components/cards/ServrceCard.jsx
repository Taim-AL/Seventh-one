import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
export default({img , icone, title , paragrfs , buuton,dur })=>{
    Aos.init();
    return(
        <>   
           <div data-aos="fade-right" data-aos-duration={dur} data-aos-offset="300" data-aos-easing="ease-in-sine" className="shadow mt-5 btns" style={{backgroundColor:" rgba(128, 128, 128, 0.10)"}}>
                <div >
                <img src={img} alt=""  className="w-100 p-2" style={{borderRadius:"5px 5px 0px 0px"}}/>
                <h1 className="mt-4 px-3"> {icone} </h1>
                <h4 className="px-2"> <b>{title}</b> </h4>
                <p className="px-3" style={{color:"grey"}}> {paragrfs} </p>
                <button className="button3-1 px-3 p-2"> {buuton} </button>
                </div>
             </div>
        </>
    )
}