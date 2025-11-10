import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Button, Col, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Navbar";

const ProductAll = () => {
  const [products, setproducts] = useState([]);
  const [filters , setfilters] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) =>{
       setproducts(data) ;
       setfilters(data)
      })  
      .catch((error) => console.log(error));
  }, []);



 const filterprudact =(category)=>{
  if(category==="All"){
    setfilters(products)
  } else{
    const updatefilter =products.filter((item)=>item.category===category)
    setfilters(updatefilter)
  }
 }







  return (
    <> 
    <Header/>
    <div  className=" container pt-5">
      <h2  className="  text-center mt-5 fs-1">Here are our products</h2>
      <hr className="mb-5 mt-3" />
      <div className="btns d-flex justify-content-center gap-5 pt-2 pb-5 flex-wrap ">
        <Button variant="outline-secondary" onClick={()=>filterprudact("All")} >All</Button>
        <Button variant="outline-secondary" onClick={()=>filterprudact("men's clothing")} >men's clothing</Button>
        <Button variant="outline-secondary" onClick={()=>filterprudact("women's clothing")} >women's clothing</Button>
        <Button variant="outline-secondary" onClick={()=>filterprudact("electronics")} >electronics</Button>
        <Button variant="outline-secondary" onClick={()=>filterprudact("jewelery")} >jewelery</Button>

      </div>

      <Row className="g-4" >
        {filters.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
      <Footer/>
    </div>
     </>
  );
};

export default ProductAll;
