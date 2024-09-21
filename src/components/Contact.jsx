import React from 'react';
import BasicExample from './Navbar';
import { Col, Row } from 'react-bootstrap';
import Footer from './Footer';

export default ()=>{
    return(<>
    
    <BasicExample/>
    <div className="about1 p-5 container-fluid">
            <div style={{paddingLeft:"2rem"}}>
                <h1 className="h1-2">Contact</h1>
                <p className="par1">
                    Home / Pages / Contact
                </p>
            </div>
        </div>
        <Row className='mx-0 ' style={{marginTop:"10rem",backgroundColor:"#f6f7f8",marginBottom:"6rem"}}>
            <Col md='6' className='container-fluid ' style={{paddingLeft:"4rem"}}>
            <h5 className="px-3" style={{color:"#32C36C",marginTop:"10vh"}}> <b>Contact Us</b> </h5>
                 <h1 className="mt-2 px-3"><b>Feel Free To Contact Us</b></h1>
                 <p className="mt-4 px-3 taxt" style={{color:"grey", fontWeight:"100",fontStyle:"italic"}}>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.<strong style={{color:"#32C36C",fontWeight:"100",cursor:"pointer"}}>Download Now</strong> .</p>
                <Row className='mx-0'>
                    <Col md='6'>
                        <input type="text" placeholder='Your Name'  className='input-contact'/>
                    </Col>
                    <Col md='6'>
                        <input type="text" placeholder='Your Email' className='input-contact'/>
                    </Col>
                </Row>
                <Row className='mx-0'>
                    <Col md='12'>
                        <input type="text" placeholder='Supject' className='input-contact'/>
                    </Col>
                    <Col md='12'>
                        <textarea name="" id="" cols="30" rows="5" placeholder='Message' className='input-contact'></textarea>
                    </Col>
                </Row>
                <button className='but-contact'>Send Message</button>
            </Col>
            <Col md='6'>
            <iframe width="100%" height="700" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=%D8%B3%D9%88%D8%B1%D8%A8%D8%A7%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%AF%D8%A7%D9%92%20%20al%20amer%20hotel+(Title)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </Col>
        </Row>
        <Footer/>
    </>)
}