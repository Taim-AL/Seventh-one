import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import img1 from '../../../assets/img/img-600x400-6.jpg';
import img2 from '../../../assets/img/img-600x400-5.jpg';
import img3 from '../../../assets/img/img-600x400-4.jpg';
import img4 from '../../../assets/img/img-600x400-3.jpg';
import img5 from '../../../assets/img/img-600x400-2.jpg';
import img6 from '../../../assets/img/img-600x400-1.jpg';
import { Col, Row } from "react-bootstrap";
import OurCard from "../OurCard";
export default()=>{
   
    const data=[
        {
            img:img1,
            title:"Solar Panels",
            text:"We Are pioneers of solar & renewable energy industry",
        },
        {
            img:img2,
            title:"Wind Turbines",
            text:"We Are pioneers of solar & renewable energy industry",
        },
        {
            img:img3,
            title:"Hydropower Plants",
            text:"We Are pioneers of solar & renewable energy industry",
        },
        {
            img:img4,
            title:"Solar Panels",
            text:"We Are pioneers of solar & renewable energy industry",
        },
        {
            img:img5,
            title:"Wind Turbines",
            text:"We Are pioneers of solar & renewable energy industry",
        },
        {
            img:img6,
            title:"Hydropower Plants",
            text:"We Are pioneers of solar & renewable energy industry",
        },
    ]
    Aos.init();
    return(
        <>
        <Row className="mx-0">
        <Col md='1'></Col>
        <Col  md='10'>
            <Row  className="mx-0">
                {
                    data.map((e)=>{
                        return(
                            <>
                           <Col data-aos="fade-up" data-aos-duration="2000" md='4'>
                               <OurCard img={e.img} title={e.title} text={e.text} />
                           </Col>
                            </>
                        )
                    })
                }
            </Row>
        </Col>
        <Col md='1'></Col>
        </Row>
        </>
    )
}