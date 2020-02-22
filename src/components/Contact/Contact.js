import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Contact.module.css";
import Title from "../Title";

const Contact = () => {
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div id="contact" className={styles.contactWrapper}>
      <Title>CONTACT</Title>
      <p style={{ textAlign: "center" }}>
        Have a question or want to work together?
      </p>
      <Form name="contact" noValidate validated={validated} onSubmit={handleSubmit} data-netlify="true" data-netlify-recaptcha="true">
        <Form.Group controlId="formEmail">
          <Form.Control required type="email" placeholder="Your email" />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Control required type="text" placeholder="Your name" />
          <Form.Control.Feedback type="invalid">
            Please enter your name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formSubject">
          <Form.Control required type="text" placeholder="Subject" />
          <Form.Control.Feedback type="invalid">
            Please enter subject
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Control
            required
            as="textarea"
            rows="3"
            placeholder="Your message"
          />
          <Form.Control.Feedback type="invalid">
            Please enter your message
          </Form.Control.Feedback>
        </Form.Group>
        <div data-netlify-recaptcha="true"></div>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
