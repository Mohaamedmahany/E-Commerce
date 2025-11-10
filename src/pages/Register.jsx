import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import Header from '../components/Navbar';

function Register() {
  return (
    <> 
    <Header/>
     <div className="hah">
     <span className="dd ">Register</span>
    <div className="aaaa  container">
      
    <Form >
     <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className=' fw-medium'>Your name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className=' fw-medium'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className=' fw-medium'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
         <span>You have an account? <a href="/Login">Login</a> </span>
      </Form.Group>
   
      <Button variant="primary" type="submit" className=' btn-center'>
        Register
      </Button>
    </Form>
      </div>
      <Footer/>
      </div>
      </>
  );
}

export default Register;