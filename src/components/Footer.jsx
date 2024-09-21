import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
////////images
import img1 from '../assets/img/img-600x400-1.jpg';
import img2 from '../assets/img/img-600x400-6.jpg';
import img3 from '../assets/img/img-600x400-5.jpg';
import img4 from '../assets/img/img-600x400-4.jpg';
import img5 from '../assets/img/img-600x400-3.jpg';
import img6 from '../assets/img/img-600x400-2.jpg';

export default()=>{
    const imag =[
        {img:img1},
        {img:img2},
        {img:img3},
        {img:img4},
        {img:img5},
        {img:img6},
    ]

    return(<>
    
    <Row className='mx-0 container-fluid footer1 p-5'>
        <Col md='3' className='mt-5 pt-3 '>
            <h5 className='h5-footer'>Address</h5>
            <p className='par-footer'>
                <LocationOnIcon className='icon1-foot'/>
                123 Street, New York, USA
            </p>
            <p className='par-footer'>
                <PhoneIcon className='icon1-foot'/>
                +012 345 67890
            </p>
            <p className='par-footer'>
                <EmailIcon className='icon1-foot'/>
                info@example.com
            </p>
            <div className='d-flex'>
                <TwitterIcon className='icon2-foot'/>
                <FacebookOutlinedIcon className='icon2-foot'/>
                <YouTubeIcon className='icon2-foot'/>
                <LinkedInIcon className='icon2-foot'/>
            </div>
        </Col>
        <Col md='3' className='mt-5 pt-3'>
            <h5 className='h5-footer' style={{marginLeft:"2rem"}}>Quick Links</h5>
            <ul style={{listStyle:"none"}}>
                <li className='li-foot'><p className='par-footer'><ArrowForwardIosIcon className='icon3-foot'/> About Us</p></li>
                <li className='li-foot'><p className='par-footer'><ArrowForwardIosIcon className='icon3-foot'/> Contact Us</p></li>
                <li className='li-foot'><p className='par-footer'><ArrowForwardIosIcon className='icon3-foot'/> Our Services</p></li>
                <li className='li-foot'><p className='par-footer'><ArrowForwardIosIcon className='icon3-foot'/> Terms & Condition</p></li>
                <li className='li-foot'><p className='par-footer'><ArrowForwardIosIcon className='icon3-foot'/> Support</p></li>
            </ul>
        </Col>
        <Col md='3' className='mt-5 pt-3'>
            <h5 className='h5-footer' style={{marginLeft:"2rem"}}>Project Gallery</h5>
            <Row className='mx-0' style={{paddingLeft:"1rem"}}>
                {imag.map((e)=>{
                    return(<>
                    <Col md='4' xs='4' className='p-1'>
                        <img src={e.img} className='img-foot' alt="" />
                    </Col>
                    </>)
                })}
            </Row>
        </Col>
        <Col md='3' className='mt-5 pt-3'>
            <h5 className='h5-footer' style={{marginLeft:"2rem"}}>Newsletter</h5>
            <div style={{paddingLeft:"2rem"}}>
                <p className='par-footer'>
                    Dolor amet sit justo amet elitr clita ipsum elitr est.
                </p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"right",marginTop:"1rem"}}>
                    <input type="email" placeholder='Your email' className='input-foot'/>
                    <button className='but-foot'>Sing Up</button>
                </div>
            </div>
        </Col>
        <hr className='mt-3'/>
        <Col md='4'>
            <p className='par-footer'>
                © <strong style={{color:"#fff"}}>Your Site Name</strong> , All Right Reserved.
            </p>
        </Col>
        <Col md='4'></Col>
        <Col md='4' style={{textAlign:"right"}}>
                <p className='par-footer'>
                    Designed By<strong style={{color:"#fff"}}> HTML Codex </strong><br/>
                    Distributed By:<strong style={{color:"#fff"}}> ThemeWagon </strong>
                </p>
        </Col>
    </Row>
    
    
    
    
    </>)
}