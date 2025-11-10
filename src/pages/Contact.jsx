import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import Header from '../components/Navbar';

function Contact() {
  return (
          <>
      <Header />
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Form className="p-3 w-100" style={{ maxWidth: "700px" }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            <Form.Label>Confirm Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button className="w-50 w-sm-75 w-100" variant="primary">
              SEND
            </Button>
          </div>
        </Form>
        <Footer />
      </div>
    </>
  );
}

export default Contact;