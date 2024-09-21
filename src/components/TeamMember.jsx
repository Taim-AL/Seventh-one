import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Col, Row } from "react-bootstrap";
import img1 from "../assets/img/team-1.jpg"
import img2 from "../assets/img/team-2.jpg";
import img3 from "../assets/img/team-3.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
export default()=>{
    Aos.init();
    return(
        <>
        <h5 className="text-center" style={{color:"#32C36C",marginTop:"10vh" ,fontWeight:"bold"}}>Team Member</h5>
        <h1 className="text-center" style={{fontWeight:"bold"}}>Experienced Team Members</h1>
         <Row className="mx-0">
            <Col md='1'></Col>
           
            <Col md='10'>
                <Row className="mx-0 mt-5">
                    <Col md='4'>
                        <div data-aos="fade-up"data-aos-duration="5000" className="shadow text-center btn5">
                           <div className="d-flex">
                            <div> <img src={img1} alt="" className="imgteam"/> </div>
                            <div className="divicon">
                                <FacebookIcon className="teamicon mt-5" style={{fontSize:"3.5rem"}}/>
                                <TwitterIcon className="teamicon" style={{fontSize:"3.5rem"}}/>
                                <InstagramIcon className="teamicon" style={{fontSize:"3.5rem"}}/>
                              </div>
                           </div>
                           
                            <h5>Full Name</h5>
                            <h6>Designation</h6>
                        </div>
                        
                    </Col>

                    <Col md='4'>
                    <div data-aos="fade-up"data-aos-duration="4000" className="shadow text-center btn5">
                    <div className="d-flex">
                            <div> <img src={img2} alt="" className="imgteam"/> </div>
                            <div className="divicon">
                                <FacebookIcon className="teamicon mt-5" style={{fontSize:"3.5rem"}}/>
                                <TwitterIcon className="teamicon" style={{fontSize:"3.5rem"}}/>
                                <InstagramIcon className="teamicon" style={{fontSize:"3.5rem"}}/>
                              </div>
                           </div>
                            <h5>Full Name</h5>
                            <h6>Designation</h6>
                        </div>
                    </Col>

                    <Col md='4'>
                    <div data-aos="fade-up"data-aos-duration="1000" className="shadow text-center btn5">
                    <div className="d-flex">
                            <div> <img src={img3} alt="" className="imgteam"/> </div>
                            <div className="divicon">
                                <FacebookIcon className="teamicon mt-5" style={{fontSize:"3.5rem"}}/>
                                <TwitterIcon className="teamicon" style={{fontSize:"3.5rem"}}/>
                                <InstagramIcon className="teamicon" style={{fontSize:"3.5rem"}}/>
                              </div>
                           </div>
                            <h5 >Full Name</h5>
                            <h6>Designation</h6>
                        </div>
                    </Col>
                </Row>

            </Col>
         
            <Col md='1'></Col>
         </Row>
        </>
    )
}