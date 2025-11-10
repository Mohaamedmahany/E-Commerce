import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addtocart } from "../Redux/CartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ id, price, title, image }) => {
  const dispatch = useDispatch()
  const handelcart = ()=>{
    const itemm = {id , price , title , image}
    dispatch(addtocart(itemm))
        toast.success(" تم إضافة المنتج إلى السلة!");

  }
  return (
      <Card className=" h-100 shadow-lg   " style={{width:"22rem"}}>
        <Card.Img variant="top" src={image}  style={{ height: "200px", objectFit: "contain" }} /> 
        <Card.Body >
          <Card.Title style={{
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }} > {title} </Card.Title>
          <Card.Text style={{color:"#6c757d"}} className=" text-center" >$ {price}</Card.Text>
          <hr/>
          <div className=" d-flex flex-wrap justify-content-center gap-2" >
            <Link to={`/product/${id}`} > 
          <Button  variant="primary">View details</Button>
          </Link>
          <Link to={"#"} >
          <Button onClick={handelcart}  variant="primary">Add To Cart</Button>
          </Link>
          </div>
        </Card.Body>
        
      </Card>
  );
};

export default ProductCard;
