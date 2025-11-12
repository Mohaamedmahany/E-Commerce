import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import Header from '../components/Navbar';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Header />
      <div
        className="login-section d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "85vh", backgroundColor: "#f8f9fa" }}
      >
        <h2 className="mb-5 fs-1 fw-bold">Login</h2>

        <div className="login-form-container " style={{ width: "100%", maxWidth: "400px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-medium">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-medium">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <div className="mt-2">
                <span>Don't have an account? </span>
                <Link to="/Register">Register</Link>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button 
                variant="primary"
                type="submit"
               
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
