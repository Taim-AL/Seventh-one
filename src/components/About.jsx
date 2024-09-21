import React from "react";
import { Col, Row } from "react-bootstrap";
import OneCard from "./cards/OneCard";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CheckIcon from '@mui/icons-material/Check';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CountUp from "react-countup";
import img1 from "../assets/img/about.jpg" 

export default()=>{
    
    const data=[
        {
            icon:<PeopleAltIcon className="icon" style={{fontSize:"3vw"}}/>,
            count:<CountUp  start={0} end={3453} duration={3} enableScrollSpy={true} />,
            title:"Happy customers",
            pragraf:"Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
        },
        {
            icon:<CheckIcon className="icon" style={{fontSize:"3vw"}}/>,
            count: <CountUp start={0} end={4234} duration={3} enableScrollSpy={true}/> ,
            title:"Project Done",
            pragraf:"Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
        }, 
        {
            icon:<WorkspacePremiumIcon className="icon" style={{fontSize:"3vw"}}/>,
            count:<CountUp start={0} end={3123} duration={3} enableScrollSpy={true}/>,
            title:"Awards Win",
            pragraf:"Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
        }, 
        {
            icon:<ManageAccountsIcon className="icon" style={{fontSize:"3vw"}}/>,
            count:<CountUp start={0} end={1231} duration={3} enableScrollSpy={true}/>,
            title:"Expert Workers",
            pragraf:"Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit",
        },
    ]
    const icons =[
        {
            tack:<CheckIcon/>,
            about:"Diam dolor diam ipsum",
        },
        {
            tack:<CheckIcon/>,
            about:"Aliqu diam amet diam et eos",
        },
        {
            tack:<CheckIcon/>,
            about:"Tempor erat elitr rebum at clita",
        },
    ]
  
    return(
        <>
        <Row className="mx-0 mt-5">
            {
                data.map((e)=>{
                    return(
                        <>
                        <Col className="text-center " md='3'>
                        <OneCard icon={e.icon} count={e.count} title={e.title} pragraf={e.pragraf}/>
                        </Col>
                        </>
                    )
                })
            }
        </Row>
        <Row  className="mx-0  mt-5">
                <Col md='6'>
                    <img src={img1} alt="" className="img1-1 mt-5" />
                </Col>
              
                <Col className="mt-5 px-5 colcol" md='6'>
                    <h5 style={{color:"#32C36C",marginTop:"10vh"}}>About Us</h5>
                    <h1 className="mt-2"><b>25+ Years Experience In Solar & Renewable Energy Industry</b></h1>
                    <p className="mt-4 taxt" style={{color:"grey"}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                     
                     {
                        icons.map((e)=>{
                            return(
                                <>
                                    <div className="d-flex">
                                    <h1> <CheckIcon  className="icomes2" style={{fontSize:"1.2vw"}}/>  </h1>
                                    <p  style={{color:"grey"}} className="mt-3 px-2"> {e.about} </p>
                                    </div>
                                </>
                            )
                        })
                     }
                     <button className="button2-1 mt-4">Explore More</button>
                </Col>
        </Row>
        </>
    )
}