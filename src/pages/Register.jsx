import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import Header from '../components/Navbar';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <Header />

      <div
        className="register-section d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "85vh", backgroundColor: "#f8f9fa" }}
      >
        {/* عنوان الصفحة */}
        <h2 className="mb-5 fs-1 fw-bold">Register</h2>

        {/* الفورم */}
        <div className="register-form-container" style={{ width: "100%", maxWidth: "400px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="fw-medium">Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="fw-medium">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="fw-medium">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <div className="mt-2">
                <span>You have an account? </span>
                <Link to="/Login">Login</Link>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
             
              >
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;
