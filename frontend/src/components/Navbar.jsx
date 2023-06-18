import React from 'react'
import { Container, Flex, CenteredFlex } from '../styles'
import { NavLink } from "react-router-dom";
import logo from '../logo.png'

const Navbar = () => {

  return (
    <CenteredFlex
      justifyContent="space-between"
      width={"100%"}
      height={"8vh"}
      position={"fixed"}
      zIndex={1000}
      top={'0'}
      bg={"#ffff"}
      border={'1px solid #dee7f9'}
      background={'linear-gradient(180deg, rgba(254,254,254,1) 35%, rgba(225,225,225,1) 100%)'}
    >
      {/* LOGO */}
      <Container
        position="relative"
        width="10%"
        padding="0 0 0 1rem"
      >
        <NavLink to="/">
          <img src={logo} style={{ width: '60%', height: 'auto', cursor: 'pointer' }} onClick={() => console.log("clicked on logo!")} />
        </NavLink>
      </Container>
      
      {/* Routes */}
      <CenteredFlex
        justifyContent="space-around"
        width="30%"
        height="100%"
      >
        {/* <p>All Questions</p> */}
      </CenteredFlex>

      {/* Account */}
      <CenteredFlex
        justifyContent="space-around"
        width="20%"
        height="100%"
        padding="0 1rem 0 0"
      >

        {/* Keeping only route here as lone route at middle of nav looks off */}
        <NavLink to="/all">
          <p>All Questions</p>
        </NavLink>

        <NavLink to="/login">
          <p>Login</p>
        </NavLink>

        <NavLink to="/signup">
          <p>Sign Up</p>
        </NavLink>
        
      </CenteredFlex>
    </CenteredFlex>
  )
}

export default Navbar;