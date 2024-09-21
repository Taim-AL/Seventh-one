import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from './NavLink';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AOS from 'aos';

function BasicExample() {
  AOS.init();
  const link =[
    {
      title:"HOME",
      to:"/"
    },
    {
      title:"ABOUT",
      to:"/about"
    },
    {
      title:"SERVICE",
      to:"/servrce"
    },
    {
      title:"PROJECT",
      to:"/project"
    },
    {
      title:"CONTACT",
      to:"/contact"
    },
  ]
  return (<>
    <Navbar  bg="light" expand="lg" fixed='top' className='shadow'>
      <Container>
  
        <Navbar.Brand href="#home"><h2 className='px-2' style={{color:"#32C36C", fontFamily: "Font Awesome 5 Free" , borderRight:"2px solid #32C36C",marginLeft:"-3vh"}}>Solartec</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-5">
           
            {link.map((e)=>{
              return(<>
              
              <NavLink e={e}/>

              </>)
            })}

            
          
          </Nav>
          <button className='button1-2 '>Get A Quote ➡️</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div style={{height:"4rem"}} id='up'></div>
    <a href='#up'>
    <button className='but-up' data-aos="fade-up">
      <ArrowUpwardIcon style={{color:"#fff"}}/>
    </button>
    </a>
    </>
  );
}

export default BasicExample;