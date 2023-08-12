import React from 'react'
import {Card, Container, Col, Row, Image} from "react-bootstrap"
import EverythingImage from '../assets/images/trending/everything.jpg';
import fast from '../assets/images/trending/fast.jpg';
import film from '../assets/images/trending/filmm.jpg';
import gatot from '../assets/images/trending/gatot.jpeg';
import sriasih from '../assets/images/trending/sri asih.jpg';
import venom from '../assets/images/trending/venom.png';
const Trending = () => {
  return (
   
    <div>
         <Container>
          <br></br>
          <br></br>
          <h1 className='text-white'>TRENDING MOVIES</h1>
            <Row>
            <Col md={4} className='movieWrapper' id='trending'>
            <Card className="movieImage" >
           <Image src={EverythingImage} alt='Everthing Movies' className='Images' />
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>EVERYTHING</Card.Title>
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
           <Image src={fast} alt='Fast Movies' className='Images'/>
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>FAST FARIUS</Card.Title>
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
           <Image src={film} alt='FIlm Movies' className='Images'/>
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>STAR SYNDROME</Card.Title>
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
           <Image src={gatot} alt='Gatot Movies' className='Images'/>
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>GATOTKACA</Card.Title>
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
           <Image src={sriasih} alt='Sriasih Movies' className='Images' />
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>SRIASIH</Card.Title>
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
           <Image src={venom} alt='Venom Movies' className='Images' />
         <div className='bg-dark'>
          <div className='p-2 m-1 text-white'>
          <Card.Title className='text-center'>VENOM</Card.Title>
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

export default Trending
