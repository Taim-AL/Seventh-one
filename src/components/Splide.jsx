import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react';
///////////imag
import img1 from '../assets/img/testimonial-1.jpg';
import img2 from '../assets/img/testimonial-2.jpg';
import img3 from '../assets/img/testimonial-3.jpg';
import { PuffLoader } from 'react-spinners';

 
export default()=> {
  const data=[
    {
      img:img1 ,
      text:"Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
      title:"Client Name",
      paragraf:"Profession",
    },
    {
      img:img2 ,
      text:"Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
      title:"Client Name",
      paragraf:"Profession",
    },
    {
      img:img3 ,
      text:"Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
      title:"Client Name",
      paragraf:"Profession",
    },
  ]
  return (
      <>
      <div className='text-center dad-div'>
      <h5 style={{color:"#32C36C",marginTop:"10vh"}}>Testimonial</h5>
      <h1 className="mt-2"><b>What Our Clients Say!</b></h1>

      </div>
      
    <Splide className='style-splide' options={ { rewind: true ,arrows:false, autoplay:true , interval:2000 , type:'loop', perPage:3 ,drag:'free',gap:'2rem',focus:"center",breakpoints:{1400 :{perPage:1}}} } aria-label="React Splide Example">
    <div className='style-splide1'></div>
       {
        data.map((e)=>{
          return(
            <>
            <SplideSlide style={{marginTop:"5vh",marginBottom:"5vh"}}>
                <div className='text-center mt-5' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img className='splide-img' src={e.img} alt="" />
                <PuffLoader color="#32C36C" className='spinner' size={150}/>
                </div>
               <div style={{display:"flex", justifyContent:"center" , alignItems:"center"}}>
               <div  style={{backgroundColor:"white",paddingLeft:"1.7rem",paddingRight:"1.7rem"}} className='shadow text-center mt-3 btn-splide '>
                    <p className='mt-3'> {e.text} </p>
                    <h4> {e.title} </h4>
                    <p> {e.paragraf} </p>
                </div>
               </div>
            </SplideSlide>
            </>
          )
        })
       }
    </Splide>
    
    </>
  );
}