import React from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Col, Row } from "react-bootstrap";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WindPowerIcon from '@mui/icons-material/WindPower';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import img1 from '.././assets/img/img-600x400-1.jpg';
import img2 from '.././assets/img/img-600x400-2.jpg';
import img3 from '.././assets/img/img-600x400-3.jpg';
import img4 from '.././assets/img/img-600x400-4.jpg';
import img5 from '.././assets/img/img-600x400-5.jpg';
import img6 from '.././assets/img/img-600x400-6.jpg';
import ServrceCard from "./cards/ServrceCard";
import DoneIcon from '@mui/icons-material/Done';
import PersonIcon from '@mui/icons-material/Person';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import BasicExample from "./Navbar";
export default()=>{
  Aos.init();
    const data =[
   {
      img:img1,
      icone:<WbSunnyIcon style={{fontSize:"12vh"}} className="icone2-1"/>,
      title:"Solar Panels",
      paragrfs:"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      button:"Raed More...",
      dur:"600"
  },
  {
      img:img2,
      icone:<WindPowerIcon style={{fontSize:"12vh"}} className="icone2-1"/>,
      title:"Wind Turbines",
      paragrfs:"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      button:"Raed More...",
      dur:"400"
  },
  {
      img:img3,
      icone:<LightbulbIcon style={{fontSize:"12vh"}} className="icone2-1"/>,
      title:"Hydropower Plants",
      paragrfs:"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      button:"Raed More...",
      dur:"200"
  },
  {
      img:img4,
      icone:<WbSunnyIcon style={{fontSize:"12vh"}} className="icone2-1"/>,
      title:"Solar Panels",
      paragrfs:"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      button:"Raed More...",
      dur:"600"
  },
  {
      img:img5,
      icone:<WindPowerIcon style={{fontSize:"12vh"}} className="icone2-1"/>,
      title:"Wind Turbines",
      paragrfs:"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      button:"Raed More...",
      dur:"400"
  },
  {
      img:img6,
      icone:<LightbulbIcon style={{fontSize:"12vh"}} className="icone2-1"/>,
      title:"Hydropower Plants",
      paragrfs:"Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.",
      button:"Raed More...",
      dur:"200"
  },
  ]
  const iconechooce=[
    {
      iccone:<DoneIcon className="iconschoouse" style={{fontSize:"3rem"}}/>, 
      text:"Quality",
      information:"Services",
    },
    {
      iccone:<PersonIcon  className="iconschoouse" style={{fontSize:"3rem"}}/>,
      text:"Expert",
      information:"Workers",
    },
    {
      iccone:<ArchitectureIcon className="iconschoouse" style={{fontSize:"3rem"}}/>,
      text:"Free",
      information:"Consultation",
    },
    {
      iccone:<HeadphonesIcon className="iconschoouse" style={{fontSize:"3rem"}}/>,
      text:"Customer",
      information:"Support",
    },
  ]
    return(
        <>
        <BasicExample/>
        <Row className="mx-0 mt-5">
            <Col md='3'></Col>
            <Col className="text-center" md='6'>
              <div  data-aos="fade-up"data-aos-duration="1500">
              <h5 style={{color:"#32C36C",marginTop:"3vh"}}>Our Services</h5>
                <h1><b>We Are Pioneers In The World Of Renewable Energy</b></h1>
              </div>
            </Col>
            <Col md='3'></Col>
        </Row>

          <Row  className="mx-0 mt-5">
            <Row className="mx-0">
              <Col md='1'></Col>
              
              <Col md='10'>
                <Row className="mx-0">
                  {
                    data.map((e)=>{
                      return(
                        <>
                          <Col md='4'>
                         <ServrceCard  img={e.img} icone={e.icone} title={e.title} dur={e.dur} paragrfs={e.paragrfs} buuton={e.button} />
                          </Col>
                        </>
                      )
                    })
                  }
                </Row>
              </Col>
              <Col md='1'></Col>
            </Row>
            </Row>

            {/* Why Choose Us! */}

            <Row  className="mx-0 mt-5 ">
              <Col  className="mt-5  colcol" md='6' style={{paddingLeft:"5vh"}}>
                <h5 className="px-5" style={{color:"#32C36C",marginTop:"10vh"}}>Why Choose Us!</h5>
                <h1 className="mt-2 px-5"><b>Complete Commercial & Residential Solar Systems</b></h1>
                <p  className="mt-4 px-5" style={{color:"grey"}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                  <Row className="mx-0">
                    {
                      iconechooce.map((e)=>{
                        return(
                          <>
                          <Col className="px-5" md='6' xs="6">
                          <div className="d-flex">
                              <h1> {e.iccone} </h1>
                              <div className="mt-1">
                                  <h6 style={{color:"grey"}} className="px-3"> {e.text} </h6>
                                  <h5 className="px-3"> <b> {e.information}</b> </h5>
                              </div>
                          </div>
                        </Col>
                          </>
                        )
                      })
                    }
                  </Row>
                  <div style={{height:"14vh"}}></div>
              </Col>
             
              <Col className="mt-5" md='6'>
                <img style={{height:"100%"}} className="w-100" src={img6} alt="" />
              </Col>
            </Row>
            
        </>
    )
} 
