import React from 'react'
import {Card, Container, Col, Row, Image} from "react-bootstrap"
import avanger from '../assets/images/superhots/avenger.jpg';
import horor from '../assets/images/superhots/horor.jpg';
import mangkujiwo from '../assets/images/superhots/mangkujiwo.jpg';
import super1 from '../assets/images/superhots/super1.jpg';
import batman from '../assets/images/superhots/batman.jpeg';
import wakanda from '../assets/images/superhots/wakanda.jpg';
 
const Superhots = () => {
  return (
   
    <div>
         <Container>
          <br></br>
          <br></br>
          <h1 className='text-white'>SUPERHOTS MOVIES</h1>
            <Row>
            <Col md={4} className='movieWrapper' id='superhots'>
            <Card className="movieImage" >
           <Image src={avanger} alt='Everthing Movies' className='Images' />
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>AVANGERS</Card.Title>
         <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text >
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
          </div>
        </div>
    </Card>
  </Col>
  <Col md={4} className='movieWrapper'>
            <Card className="movieImage" >
           <Image src={horor} alt='Fast Movies' className='Images'/>
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>GHOST WRITTER</Card.Title>
         <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text >
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
          </div>
        </div>
    </Card>
  </Col>
  <Col md={4} className='movieWrapper'>
            <Card className="movieImage" >
           <Image src={mangkujiwo} alt='FIlm Movies' className='Images'/>
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>MANGKUJIWO</Card.Title>
         <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text >
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
          </div>
        </div>
    </Card>
  </Col>
  <Col md={4} className='movieWrapper'>
            <Card className="movieImage" >
           <Image src={super1} alt='Gatot Movies' className='Images'/>
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>SKY HIGHT</Card.Title>
         <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text >
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
          </div>
        </div>
    </Card>
  </Col>
  <Col md={4} className='movieWrapper'>
            <Card className="movieImage" >
           <Image src={batman} alt='Sriasih Movies' className='Images' />
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>BATMAN</Card.Title>
         <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text >
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
          </div>
        </div>
    </Card>
  </Col>
  <Col md={4} className='movieWrapper'>
            <Card className="movieImage" >
           <Image src={wakanda} alt='Venom Movies' className='Images' />
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>WAKANDA</Card.Title>
         <Card.Text className='text-left'>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. 
        </Card.Text >
        <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
          </div>
        </div>
    </Card>
  </Col>
</Row>
</Container>
</div>
  )
}

export default Superhots
