import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div>
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href='/' className='text-white'>Movies</Navbar.Brand>
        <Nav>
        <Nav.Link href='#trending'  className='text-white'>Trending</Nav.Link>
        <Nav.Link href='#superhots' className='text-white'>Superhots</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavigationBar
