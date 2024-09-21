import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Splide from "./Splide";
import Servrce from "./Servrce";
import BasicExample from "./Navbar";
import TeamMember from "./TeamMember";
import About from "../components/About";
import { Col, Row } from "react-bootstrap";
import OurProjects from "./cards/OurProjects";
import Footer from "./Footer";
export default()=>{
    Aos.init();
    return(
        <>
        <BasicExample/>
         <Row className="mx-0 home-1" >
            <Col md='8'>
                <div data-aos="fade-up" data-aos-duration="3000">
               <h1 className="h1-1 px-4"><b>Pioneers <span style={{color:"#32C36C"}}>Of</span> Solar And Renewable Energy <span style={{color:"#32C36C"}}>.</span></b></h1>
               <h5 className="text-white px-5">Vero eltir justo lorem . ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita at Kasd rebum sea elitr </h5>
               <button className="button1-1 ml-5">Raed More</button>
               </div>
            </Col>
          
            <Col md='4'></Col>
         </Row>
            <About/>
            <Servrce/>
            <OurProjects/>
            <TeamMember/>
            <Splide/>
            <Footer/>
        </>
        
    )
}