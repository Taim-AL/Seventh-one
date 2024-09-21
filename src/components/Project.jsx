import React from 'react';
import BasicExample from './Navbar';
import OurProjects from './cards/OurProjects';
import Splide from './Splide';
import Footer from './Footer';

export default ()=>{
    return(<>
    
    <BasicExample/>
        <div className="about1 p-5 container-fluid">
            <div style={{paddingLeft:"2rem"}}>
                <h1 className="h1-2">Projects</h1>
                <p className="par1">
                    Home / Pages / Projects
                </p>
            </div>
        </div>
        <OurProjects/>
        <Splide/>
        <Footer/>
    </>)
}