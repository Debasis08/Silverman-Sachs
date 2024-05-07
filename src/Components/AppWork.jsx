import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import { Image } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';


const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: img2,
    title: 'Audit',
    subtitle: 'audit'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: img3,
    title: 'Assurance',
    subtitle: 'Branding'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: img4,
    title: 'Tax',
    subtitle: 'Taxation'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: img5,
    title: 'Legal Stuff',
    subtitle: 'Legalities'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: img6,
    title: 'Advisory',
    subtitle: 'Advisory'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: img7,
    title: 'Private Enterprise',
    subtitle: 'Business & Start-ups'
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: img8,
    title: 'Cybersecurity in ESG',
    subtitle: 'Cybersecurity'
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: img9,
    title: 'Analyst',
    subtitle: 'Analyst'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: img2,
    title: 'Authorization',
    subtitle: 'Authorization'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
  

function AppWork() {
  return (
    <section id='works' className='block works-block'>
    <Container fluid>
        <div className='title-holder'>
        <h2>Our works</h2>
        <div className='subtitle'>
        Our awesome works
        </div>
        </div>

        <Row className='portfolioList'>
        {
            worksData.map(works => {
                return (
                    <Col sm={6} lg={4} key={works.id}>
                    <div className='portfolio-wrapper'>
                    <a href={works.link}>
                        <Image src={works.image} />
                        <div className='label text-center'>
                            <h3>{works.title}</h3>
                            <p>{works.subtitle}</p>
                        </div>
                    </a>
                    </div>
                </Col>
                )
            })
        }
        
        </Row>

        <Pagination>{items}</Pagination>
    </Container>
    </section>
  )
}

export default AppWork
