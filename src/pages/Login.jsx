


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import Header from '../components/Navbar';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <> 
    <Header/>
    <div className="hah">
       <span className="dd ">Login</span>
    <div className="aaaa  container">
    <Form>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
       <Form.Label  className=' fw-medium'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label  className=' fw-medium'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
       <span>Don't have an account?
        
        <Link to={"/Register"} > Register  </Link>
          </span>
      </Form.Group>
   
      <Button variant="primary" type="submit" className=' btn-center'>
        Login
      </Button>
    </Form>
    </div>
    <Footer/>
    </div>
    </>
  );
}



export default Login;