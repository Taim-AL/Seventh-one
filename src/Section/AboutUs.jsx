import React from "react";
import About from "../components/About";
import BasicExample from "../components/Navbar";
import Footer from "../components/Footer";
import TeamMember from "../components/TeamMember";

export default()=>{
    
    return(
        <>
        <BasicExample/>
        <div className="about1 p-5 container-fluid">
            <div style={{paddingLeft:"2rem"}}>
                <h1 className="h1-2">About Us</h1>
                <p className="par1">
                    Home / Pages / About
                </p>
            </div>
        </div>
        <About/>
        <TeamMember/>
        <Footer/>
        </>
    )
}