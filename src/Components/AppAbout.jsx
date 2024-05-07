import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import img1 from '/src/assets/images/img1.jpg'

function AppAbout() {
    const retail = 90;
    const asset = 90;
    const insurance = 90;

  return (
    <section id='about' className='block about-block'>
    <Container fluid>
        <div className='title-holder'>
            <h2>About Us</h2>
            <div className='subtitle'>Learn more about Us</div>
        </div>
        <Row>
        <Col sm={6} className='align-content-center'>
            <Image src={img1}/>
        </Col>
        <Col sm={6}>
            <p>India represents possibly among the best long-term prospect in terms of stability and sustainability. While this presents a clear opportunity for the financial services industry, there is plenty of ground to cover in order to bring about complete financial inclusion.</p> <p> At Silverman sachs, our nuanced understanding of the financial services sector, deftly balancing risks with rewards, combined with a relentless focus on systems, processes and the highest governance standards, enables us to deliver quality services to our customers.</p> <p>Trust from Customers:</p>
        <div className='progress-block'>
            <h4>Retail Credit</h4>
            <ProgressBar now={retail} label={`${retail}%`} />
        </div>
        <div className='progress-block'>
            <h4>Assest Management</h4>
            <ProgressBar now={asset} label={`${asset}%`} />
        </div>
        <div className='progress-block'>
            <h4>Insurance</h4>
            <ProgressBar now={insurance} label={`${insurance}%`} />
        </div>
        </Col>
        </Row>
    </Container>
    </section>
  )
}

export default AppAbout
