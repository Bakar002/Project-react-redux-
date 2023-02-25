import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '@mui/material/Menu';
import {useSelector} from "react-redux"
import Table from 'react-bootstrap/esm/Table';
import { NavLink }from 'react-router-dom';
import { DLT } from '../Redux/Actions/action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
 

const Header = () => { 
  const dispatch=useDispatch();
  const[price,setPrice]=useState(0);
  console.log(price)


  const getData = useSelector((state)=>
    state.reducer.carts
  )
  console.log (getData)
    const [anchorEl,  setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt=(id)=>{
    dispatch(DLT(id))
  }
  const total=()=>{
    let price=0;
    getData.map((ele,k)=>{
      price=ele.price+price
    })
    setPrice(price);
  
  }
  useEffect(() => {
    total();
    
  }, [total])

  return (<>
    <Navbar bg="dark" variant="dark"style={{height:55}}>
    <Container>
      <NavLink to="/cart" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
      <Nav className="me-auto">
        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
      
      </Nav>
      <Badge badgeContent={getData.length} color="primary"
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
        {
          getData.length?
          <div className="card_details" style={{width:"25rem",padding:10}}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Resturant Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  getData.map((e)=>{
return(
  <>
  <tr>
    <td>
     <NavLink to={`/cart/${e.id}`}   onClick={handleClose}> <img src={e.imgdata}alt="" style={{width:"5rem",height:"5rem"}}/></NavLink>
    </td>
    <td>
      <p>{e.rname}</p>
      <p>Price:₨ {e.price}</p>
      <p>Quantity: {e.qnty}</p>
        <p onClick={()=>dlt(e.id)}>
          <i className="fas fa-trash smalltrash"style={{color:"red",fontSize:20,cursor:"pointer"}}></i>
        </p>

    </td>
    <td>
    <p onClick={()=>dlt(e.id)}>
          <i className="fas fa-trash largetrash"style={{color:"red",fontSize:20,cursor:"pointer"}}></i>
        </p>
    </td>
  </tr>
  </>
)
                  })
                }
              <p className='text-center'>Total:₨ {price}</p>
              </tbody>
            </Table>
          </div>:
           <div className="card_details d-flex justify-content-center allign-items-center"style={{width:"23rem",padding:10,position:"relativex"}}>
           <i className="fas fa-close smallclose" onClick={handleClose} style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
   
               <p>Your cart is empty</p>
               <img src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-trolley-shopping-cart-icon-png-free-map-image_1187820.jpg" alt="" className = "emptycart_img"style={{width:"5rem",padding:10}} />
           </div>
                
        }
       
      </Menu>
    
  </Navbar> 
  </>
  )
}

export default Header