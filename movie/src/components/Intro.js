import React from 'react'
import { Container, Row , Col, Button} from 'react-bootstrap';


const Intro = () => {
  return (
    <div>
      <div className='intro'>
        <Container className='text-white text-center d-flex justify-content-center align-items-center '>
          <Row>
            <Col>
            <div className='title'> MOVIES </div>
            <div className='title'> INDONESIA</div>
            <div className='introButton mt-4 text_centered'>
                <Button variant='dark'href='#superhots'>Read More</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Intro
