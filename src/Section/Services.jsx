import React from 'react';
import BasicExample from '../components/Navbar';
import Servrce from '../components/Servrce';
import Splide from '../components/Splide';
import Footer from '../components/Footer';

export default ()=>{
    return(<>
    
    <BasicExample/>
        <div className="about1 p-5 container-fluid">
            <div style={{paddingLeft:"2rem"}}>
                <h1 className="h1-2">Services</h1>
                <p className="par1">
                    Home / Pages / Services
                </p>
            </div>
        </div>
    <Servrce/>
    <Splide/>
    <Footer/>
    
    </>)
}