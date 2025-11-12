import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Navbar'
import menImg from '../assets/man.jpg';
import womenImg from '../assets/woman2020.jpg';
import jewelImg from '../assets/Diamond.jpg';
import electronicsImg from '../assets/electric.webp';

const AboutPages = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "70px" }} className='container'>
        
        {/* عنوان About Us */}
        <h2 className='text-center mt-5 fs-1 fw-bold'>About Us</h2>
        <hr className='mb-4' />
        <p className='text-center fs-5 lh-lg'>
          Welcome to our world! At E-commerce, we’re here to make your online shopping experience easier, faster, and more fun than ever. 
          You’ll find everything you need in one place — from trendy clothes that match every style, to stylish accessories, and the latest electronics that make life simpler. 
          We’re not just another online store; we’re a community that values style, quality, and comfort.
        </p>
        <p className='text-center fs-5 lh-lg mt-3'>
          Our mission is simple — to let you shop with confidence. Every product is carefully selected to guarantee top quality and great value. Enjoy 100% secure payments, fast delivery right to your door, and a friendly support team that’s always ready to help whenever you need it.
        </p>
        <p className='text-center fs-5 lh-lg mt-3'>
          We believe shopping isn’t just about buying things — it’s an experience that reflects your taste and personality. That’s why we’re constantly updating our collections, adding new products, and bringing you the best deals all year round.
        </p>

        {/* Our Products */}
        <h2 className='text-center mb-4 mt-5 fs-1 fw-bold'>
          Our Products
        </h2>
        <hr className='mb-5' style={{ width: "80%", maxWidth: "500px", margin: "auto" }} />

        <Row className="g-4 justify-content-center">
          {[{img: menImg, title: "Men's Clothing"},
            {img: womenImg, title: "Women's Clothing"},
            {img: jewelImg, title: "Jewelery"},
            {img: electronicsImg, title: "Electronics"}].map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="text-center shadow-lg h-100">
                <Card.Img variant="top" src={item.img} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Footer />
      </div>
    </>
  )
}

export default AboutPages;
