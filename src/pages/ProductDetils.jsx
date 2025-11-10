import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Navbar";

const ProductDetils = () => {
  const { id } = useParams();
  const [detils, setdetils] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data1) => setdetils(data1))
      .catch((error) => console.log(error));
  }, [id]);

  if (!detils){
    <Header/>
     return<h2>Looooading.....</h2>;}
  return (
    <>
    <Header/>
    <div className=" d-flex justify-content-center align-items-center" style={{ height: "100vh" }} >
      <Card className="d-flex flex-row align-items-center shadow-lg " style={{ width: "80rem" }}>
        <Card.Img variant="top" src={detils.image} style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
        <Card.Body> 
          <Card.Title>{detils.title}</Card.Title>
          <Card.Text>
            {detils.price}
          </Card.Text>
          <Link to="/ProductAll" >
          <Button variant="primary">Back to products</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
        </>

  );
};

export default ProductDetils;
