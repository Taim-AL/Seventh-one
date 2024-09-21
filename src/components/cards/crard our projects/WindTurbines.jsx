import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import img1 from "../../../assets/img/img-600x400-5.jpg"
import img2 from "../../../assets/img/img-600x400-2.jpg"
import { Col, Row } from "react-bootstrap";
export default()=>{
    Aos.init();
    return(
        <>
        <Row className="mx-0">
            <Col md='1'></Col>
            <Col md='10'>
                <Row className="mx-0">
                    <Col md='4'>
                        <div data-aos="fade-up" data-aos-duration="2000">
                        <img className="w-100 img4-1" src={img1} alt="" />
                        <p className="p4-1 px-3">Wind Turbines</p>
                        <h5 className="mt-2 h5-4-2">We Are pioneers of solar & renewable energy industry</h5>
                        </div>
                    </Col>
                  
                    <Col md='4'>
                        <div data-aos="fade-up" data-aos-duration="2300"> 
                        <img className="w-100 img4-1" src={img2} alt="" />
                        <p className="p4-1 px-3">Wind Turbines</p>
                        <h5 className="mt-2 h5-4-2">We Are pioneers of solar & renewable energy industry</h5>

                        </div>
                    </Col>
                  
                    <Col md='4'></Col>
                </Row>
            </Col>
            <Col md='1'></Col>
        </Row>
        
        </>
    )
}