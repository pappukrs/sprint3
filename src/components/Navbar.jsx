import React from "react";
import styled from 'styled-components'
import {Link} from  'react-router-dom'



const NavCss=styled.div`
   
  display: flex;
  justify-content: space-between;
  background: teal;
  gap: 18px;
  color: white;
  
`
const Navbar = () => {
  return <NavCss>
    <Link>HOME</Link>
    <Link to='/login'>LOGIN</Link>


  </NavCss>;
};

export default Navbar;
