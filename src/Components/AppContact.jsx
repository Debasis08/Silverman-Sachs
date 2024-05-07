import React from 'react'
import { Container, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function AppContact() {
  return (
    <section id='contact' className='block contact-block'>
      <Container fluid>
        <div className='title-holder'>
            <h2>Contact Us</h2>
            <div className='subtitle'>
                Get Connected with Us
            </div>
        </div>
            <Form className='contact-form'>
            <Row>
                <Col sm={4}>
                <Form.Control type='text' placeholder="Enter your fulll name" required/>
                </Col>
                <Col sm={4}>
                <Form.Control type='email' placeholder="Enter your email address" required/>
                </Col>
                <Col sm={4}>
                <Form.Control type='tel' placeholder="Enter your contact number" required/>
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                <Form.Control as="textarea" placeholder="Enter your message"  required/>
                </Col>
            </Row>
            <div className='btn-holder'>
                <Button type='submit'>Submit</Button>
            </div>
            </Form>
      </Container>

      <div className='google-map'>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.400866717973!2d77.615653!3d12.912534900000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153e0d153d6d%3A0x159a8107d30fbe48!2sDroupadamma%20Nilaya%20No.%208!5e0!3m2!1sen!2sin!4v1715063141932!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <Container fluid>
        <div className='contact-info'>
            <ul>
                <li>
                    <i className='fas fa-envelope'></i>
                    patrodebasis8@gmail.com
                </li>
                <li>
                    <i className='fas fa-phone'></i>
                    +91-8763840234
                </li>
                <li>
                    <i className='fas fa-map-marker-alt'></i>
                    Madiwala, Bangalore
                </li>
            </ul>
        </div>
      </Container>
    </section>
  )
}

export default AppContact
