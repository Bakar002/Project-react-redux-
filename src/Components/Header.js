import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '@mui/material/Menu';

import {NavLink }from 'react-router-dom';

const Header = () => {
    const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar bg="dark" variant="dark"style={{height:55}}>
    <Container>
      <NavLink to="#home" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
      <Nav className="me-auto">
        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
      
      </Nav>
      <Badge badgeContent={4} color="primary"
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}>
        
       <i class="fa-solid fa-cart-shopping text-light"style={{fontSize:25,cursor:"pointer"}}></i>
    </Badge>
      
    </Container>
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="card_details d-flex justify-content-center allign-items-center"style={{width:"23rem",padding:10,position:"relativex"}}>
        <i className="fas fa-close smallclose" onClick={handleClose} style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>

            <p>Your cart is empty</p>
            <img src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-trolley-shopping-cart-icon-png-free-map-image_1187820.jpg" alt="" className = "emptycart_img"style={{width:"5rem",padding:10}} />
        </div>
             
      </Menu>
    
  </Navbar>
  )
}

export default Header