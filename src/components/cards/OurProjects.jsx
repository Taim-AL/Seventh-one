import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import All from "./crard our projects/All";
import SolarPanels from "./crard our projects/SolarPanels";
import WindTurbines from "./crard our projects/WindTurbines";
import HydropowerPlants from "./crard our projects/HydropowerPlants";
import img from "../../assets/img/quote.jpg";
export default()=>{
    const [button , Setbutton]=useState("1")
    const [class1,setClass1] = useState('button4-2')
    const [class2,setClass2] = useState('button4-1')
    const [class3,setClass3] = useState('button4-1')
    const [class4,setClass4] = useState('button4-1')
    return(
        <>
        <Row className="mx-0 text-center mt-5">
            <Col md='3'></Col> 
            <Col md='6'>
                <h6 style={{color:"#32C36C" , marginTop:"15vh"}}> <b>Our Projects</b> </h6>
                <h1 className="mt-3"><b>Visit Our Latest Solar And Renewable Energy Projects</b></h1>
                <div className="d-flex mt-5  justify-content-center  align-items-center">
                    <button onClick={()=>{Setbutton("1");setClass1('button4-2');setClass2('button4-1');setClass3('button4-1');setClass4('button4-1');}} className={class1}>All</button>
                    <button onClick={()=>{Setbutton("2");setClass1('button4-1');setClass2('button4-2');setClass3('button4-1');setClass4('button4-1');}} className={class2}>Solar Panels</button>
                    <button onClick={()=>{Setbutton("3");setClass1('button4-1');setClass2('button4-1');setClass3('button4-2');setClass4('button4-1');}} className={class3}>Wind Turbines</button>
                    <button onClick={()=>{Setbutton("4");setClass1('button4-1');setClass2('button4-1');setClass3('button4-1');setClass4('button4-2');}} className={class4}>Hydropower Plants</button>
                </div>
            </Col>
            <Col md='3'></Col>
        </Row>
        {
            button === "1" ? <All/> :""
        }
        {
            button === "2" ? <SolarPanels/> :""
        }
        {
            button === "3" ? <WindTurbines/> :""
        }
        {
            button === "4" ? <HydropowerPlants/> :""
        }
        <Row className="mx-0 mt-5">
            <Col md='6'>
                <img src={img} alt=""  className="w-100 mt-5"/>
            </Col>
           
            <Col className="colcol mt-5" md='6'>
                 <h5 className="px-3" style={{color:"#32C36C",marginTop:"10vh"}}> <b>Free Quote</b> </h5>
                 <h1 className="mt-2 px-3"><b>Get A Free Quote</b></h1>
                 <p className="mt-4 px-3 taxt" style={{color:"grey", fontWeight:"bold"}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
               
                <div  className="d-flex justify-content-center align-items-center">
                    <input className="input1-1" type="text" placeholder="Your Name"/>
                    <input className="input1-1" type="text" placeholder="Your Email"/>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <input className="input1-1" type="text" placeholder="Your Mobile"/>
                    <input className="input1-1" type="password" placeholder="Your Password"/>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                <textarea className="text-area mt-3" name="" id="" cols="50" rows="2" placeholder="Special Note"></textarea>
                </div>
                <button style={{marginLeft:"7vh"}} className="button2-1 mt-5">Submit</button>
            </Col>
        </Row>

        </>
    )
}