import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

const Navbar = () => {

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 1.8rem;

      li {
        list-style: none;
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;

        }
        &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
      }}
     
    }
    `;

  return (
     <Nav>
    <div className='menuIcon'>
   <ul className='navbar-list'>
    <li>
    <NavLink className="navbar-link" to="/"> Home</NavLink>
    </li>
    <li>
    <NavLink className="navbar-link" to="/Mentorship">Mentorship </NavLink>
    </li>
    <li>
    <NavLink className="navbar-link" to="/SkillProgress">SkillProgress</NavLink>
    </li>
    <li>
    <NavLink className="navbar-link" to="/StudyMaterials">StudyMaterials</NavLink>
    </li>
    <li>
    <NavLink className="navbar-link" to="/Employment">Employment</NavLink>
    </li>
    <li>
    <NavLink className="navbar-link" to="/ContactUs">ContactUs</NavLink>
    </li>
    <li>
    <Search />
    </li>
   </ul>
      
    </div>
    </Nav>
  );
}
  

export default Navbar;
