import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';

export default ({e})=>{
    AOS.init()
    const location = useLocation()
    const [class1,setClass1] = useState('nav-items1')
    const navigate =useNavigate()
    useEffect(()=>{
        location.pathname === e.to ?setClass1('nav-items2'):setClass1('nav-items1')
    },[location])
    return(<>
    <div>

    <Nav.Link className={class1} onClick={()=>{navigate(e.to)}} >{e.title}</Nav.Link>

    </div>
    
    </>)
}