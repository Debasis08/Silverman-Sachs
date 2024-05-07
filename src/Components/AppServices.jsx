import React from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AppServices() {

    const servicesData = [
        {
          id: 1,
          icon: 'fas fa-building',
          title: 'Asset Management',
          description: 'Working with asset management firms, from institutional investors to wealth management, helping them make bold decisions required for future success.'
        },
        {
          id: 2,
          icon: 'fas fa-bank',
          title: 'Banking & Capital Market',
          description: "From the world's largest banks to fintech's, we help them create a future that is interconnected, secure and frictionless for their clients."
        },
        {
          id: 3,
          icon: 'fas fa-plug',
          title: 'Energy',
          description: 'Shifting regulation, customer demands, and technologies and transforming the energy factor. Together we can tackle difficult issues.'
        },
        {
          id: 4,
          icon: 'fas fa-building',
          title: 'Government',
          description: 'A global network of professionals who deliver meaningful results through a deep under standing of the issues and operations of the public sector.'
        },
        {
          id: 5,
          icon: 'fas fa-bug',
          title: 'Life Sciences',
          description: 'Building, reforming and transforming world-class biotechnology, pahrmaceutical and medical device corporaions to meet the demands of patients.'
        },
        {
          id: 6,
          icon: 'fas fa-umbrella',
          title: 'Insurance',
          description: "helping the world's largest insurers dealing with regulatpry changes, operational pressures and demands to digitize, prepare for the future."
        }
      ]

  return (
    <section id='services' className='block services-block'>
    <Container fluid>
        <div className='title-holder'>
            <h2>Our Services</h2>
            <div className='subtitle'>Services we provide</div>
        </div>
        <Row>
        {
            servicesData.map(services => {
                return (
                    <Col sm={6} lg={4} className='holder' key={services.id}>
                        <div className='icon'>
                            <i className ={services.icon}></i>
                        </div>
                        <h3>{services.title}</h3>
                        <p>{services.description}</p>
                    </Col>
                )
            })
        }
        </Row>
    </Container>      
    </section>
  )
}

export default AppServices
