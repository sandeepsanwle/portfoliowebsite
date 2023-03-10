import React from 'react'; 
import { useState } from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBIcon,MDBBtn } from 'mdb-react-ui-kit';

 
const Homepage = () => {
   const [navbar,setNavbar] = useState(false);

   const changenavBackground = () =>{
    if(window.scrollY >= 20 ){
        setNavbar(true);
    }else{
        setNavbar(false);
    }
   };

   window.addEventListener('scroll',changenavBackground);
   
  /* const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };*/
    return(
        <>
        <div id='homediv' className='homediv'>
        <nav className={navbar ? 'navbar active':'navbar'}>
        <h1 className='name' style={{fontFamily: 'Fredoka One'}} >Sandeep</h1>
        <MDBDropdown dropleft group className='bg-transparent shadow-0'>
        <MDBDropdownToggle className='bg-transparent shadow-0 text-dark'><MDBIcon fas icon="bars" size='3x' /></MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link ><a style={{color:'black'}} href="#homediv">HOME</a></MDBDropdownItem>
          <MDBDropdownItem link><a style={{color:'black'}} href="#aboutdiv">ABOUT</a></MDBDropdownItem>
          <MDBDropdownItem link><a style={{color:'black'}} href="#projectsdiv">Projects</a></MDBDropdownItem>
          <MDBDropdownItem link><a style={{color:'black'}} href="#certificatesdiv">Certificate</a></MDBDropdownItem>
          <MDBDropdownItem link><a style={{color:'black'}} href="#contactdiv">Contact</a></MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      { /* <div onClick={toggleMenu}>
        <MenuIcon className='menuicon' sx={{ fontSize: 45 }}/>
        {showMenu && (
        <div className='menudiv'>
            <ul>
                <li><a href="#homediv">HOME</a> </li>
                <li><a href="#aboutdiv">ABOUT</a></li>
                <li><a href="#projectsdiv">Projects</a></li>
                <li><a href="#certificatesdiv">Certificate</a></li>
                <li><a href="#contactdiv">Contact</a></li>
            </ul>
        </div>
        )}
        </div>*/}
        
        </nav>
        <div className='hidiv'>
            <h2 style={{fontSize:'4vh',fontWeight:'bolder'}} className="sandeep">Hi</h2>
            <h1 style={{fontSize:'8vh',}} className="sandeep">I am Sandeep</h1>
            <h1 style={{fontSize:'6vh',fontFamily:'serif',fontWeight:'lighter'}}>Frontend Web Developer</h1>
            <MDBBtn  className='aboutbtn' rippleColor='dark'>
            <a href="#contactdiv" style={{color:'black'}}>Contact Me ↓</a>
          </MDBBtn>
 
        </div>
        </div>
      
        </>
    );
}

export default Homepage;