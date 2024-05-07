import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';

const blogData = [
  {
    id: 1,
    image: blog1,
    time: '15 Nov 2016',
    title: 'Powering data and AI solutions',
    description: 'We are collaborating with Microsoft in the field of data and AI, and we are thrilled to announce that KPMG firms are using Microsoft Fabric to power data-led solutions.',
    link: 'https://kpmg.com/xx/en/blogs/home/posts/2023/11/kpmg-microsoft-fabric-blog.html'
  },
  {
    id: 2,
    image: blog2,
    time: '10 Nov 2016',
    title: 'Catalyst for transformative infrastructure',
    description: 'Future demand for infrastructure continues to grow exponentially – imploring governments to identify ways to not just deliver more, but to deliver smarter and faster.',
    link: 'https://kpmg.com/xx/en/blogs/home/posts/2023/10/digital-twins-catalyst-for-transformative-infrastructure.html'
  },
  {
    id: 3,
    image: blog3,
    time: '07 Nov 2016',
    title: 'Future of Urban Transformation',
    description: 'Amid a global landscape characterized by economic and geopolitical turmoil, the Asia Pacific region (ASPAC) has remained resilient, with growth rates on an upward trend.',
    link: 'https://kpmg.com/xx/en/blogs/home/posts/2024/04/the-future-of-urban-transformation-in-asia-pacific.html'
  }
]


function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={6} lg={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppBlog;