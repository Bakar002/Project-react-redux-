import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink }from 'react-router-dom';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark"style={{height:55}}>
    <Container>
      <NavLink to="#home" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
      <Nav className="me-auto">
        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
      
      </Nav>
      <Badge badgeContent={4} color="primary">
       <i class="fa-solid fa-cart-shopping text-light"style={{fontSize:25}}></i>
    </Badge>
      
    </Container>
    
  </Navbar>
  )
}

export default Header