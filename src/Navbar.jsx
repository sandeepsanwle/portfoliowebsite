import React from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () =>{
    return(
        <>
   
   <div classname="navbar">
            <NavLink  classname="navitem" exact activeClassName="active_class" to="/">About</NavLink>
            <NavLink classname="navitem"  exact activeClassName="active_class" to="/Form">Form</NavLink>
            <NavLink  classname="navitem" exact activeClassName="active_class" to="/card">card</NavLink>
        </div>
        </>
    )
}

export default Navbar;
