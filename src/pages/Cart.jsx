import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, removecart } from '../Redux/CartSlice'
import { Link } from 'react-router-dom'
import Header from '../components/Navbar'


const Cart = () => {

    const cartitems = useSelector((state)=>state.cart.items)
    const dispath = useDispatch()
     const totalproduct = cartitems.reduce(
    (sum, item) => sum + item.plus, 0
  )
    const totalprice = cartitems.reduce(
        (sum , num )=>sum+num.price*num.plus , 0

    ) 
        if(cartitems.length===0) {
            return <div style={{height:"500px"}} className=' d-flex flex-column justify-content-center align-items-center ' >
              <Header/>
              <h2 className=' fs-1 fw-bold pt-5 pb-5' >  Cart is empty </h2>
              <Link to={"/ProductAll"} >
              <Button> To products  </Button>
              </Link>
            </div>
        }
    
  return (
    <> 
    <Header/>
   <div className=" container mt-5 pt-5">
  <div className="row flex-lg-row pt-5">
    <div className="col-lg-8">
      <Row className="g-4 justify-content-center">
        {cartitems.map((dataa) => (
          <Col xs={12} sm={6} md={4} key={dataa.id}>
            <Card className="h-100 shadow-lg">
              <Card.Img
                variant="top"
                src={dataa.image}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className=' pb-2'>{dataa.title}</Card.Title>
                <Card.Text className=' fw-bold' >Price: {dataa.price} $</Card.Text>
                <Card.Text className=' fw-bold'>Quantity: {dataa.plus}</Card.Text>
                <div className="mt-auto d-flex justify-content-around">
                  <Button variant="success" onClick={() => dispath(addtocart(dataa))}>
                    +
                  </Button>
                  <Button variant="danger" onClick={() => dispath(removecart(dataa))}>
                    -
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>

    <div style={{background:"light" , height:"350px"}} className="col-lg-4 mt-4 mt-lg-0 text-center ">
      <h2 className="mb-3 mt-3 fw-bold">Basket purchases</h2>
      <hr style={{width:"65%" , margin:"auto"}} className=' pb-3' />
      <h5 className=' fw-bold'>
        Total Price:  {totalprice.toFixed(2)} <i className="bi bi-currency-dollar"></i> 
      </h5>
      <h5 className=' pt-3 pb-4 fw-bold' > 
        Total Quantity:  {totalproduct} <i class="bi bi-emoji-laughing-fill text-danger"></i>
      </h5>
      <Link to="/ChekOut">
        <Button className="mt-2 w-50">Check Out</Button>
      </Link>
    </div>
  </div>
</div>
     </>

  )
}

export default Cart