import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style_folder.css/style.css'
import { Link } from 'react-router-dom';
import '../style_folder.css/style.css'
import Register from './Register';
import { Route,Routes } from 'react-router-dom';
import Login from './Login';

export default function Header() {
  return (
    <div>
      {/* nav bar starting */}
      <Navbar bg="" expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href="#home">INFORMATION</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="me-auto">

            <Link to="/Register" className='regi'>Register</Link>
            <Link to='/Login' className='login'>Log in</Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* nav bar ending */}
        
      <Routes>
    <Route exact path='/Register' element={<Register/>}></Route>
     <Route exact path='/Login' element={<Login/>}></Route> 
</Routes>


    </div>
  )
}
