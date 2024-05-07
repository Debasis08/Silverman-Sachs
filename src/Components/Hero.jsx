import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgHero1 from '../assets/images/img-hero1.jpg';
import imgHero2 from '../assets/images/img-hero2.jpg';
import imgHero3 from '../assets/images/img-hero3.jpg';

var heroData = [
    {
      id: 1,
      image: imgHero1,
      title: 'Life Insurance',
      description: 'As a brand, we believe in making Zindagi Unlimited for our customers, partners and employees. We do this by going beyond offering life insurance and proactively seeking insights into protecting customer dreams and aspirations.',
      link: 'https://nexus-blog-silk.vercel.app/'
    },
    {
      id: 2,
      image: imgHero2,
      title: 'Asset Management',
      description: "Our professional asset management team comes with a rich experience of working in the mutual fund industry and financial markets. A methodology based on rigorous research helps us spot the best investment opportunities.",
      link: 'https://nexus-blog-silk.vercel.app/'
    },
    {
      id: 3,
      image: imgHero3,
      title: 'Mutual Funds',
      description: "The Edelweiss mutual funds portfolio encompasses the entire risk return spectrum and is designed to offer the best opportunity to investors for investment growth, with constant focus on risk and preservation of capital. In 2016, we increased our footprint in India by acquiring the onshore fund schemes of J P Morgan Mutual Fund in India.",
      link: 'https://nexus-blog-silk.vercel.app/'
    }
]
  

function AppHero() {
  return (

    <section id='home' className='hero-block'>
    <Carousel>
        {
            heroData.map(hero => {
                return(
                    <Carousel.Item key={hero.id}>
                    <img 
                    className='d-block w-100'
                    src={hero.image}
                    alt={"Slide " + hero.id }
                     />
                    <Carousel.Caption>
                      <h3>{hero.title}</h3>
                      <p>{hero.description}</p>
                      <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                    </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        }
        
    </Carousel>
    </section>
  )
}

export default AppHero
