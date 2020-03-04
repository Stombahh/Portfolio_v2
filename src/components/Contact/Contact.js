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
      <Form name="contact" method="post" noValidate validated={validated} onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bot-field">
        <p className={styles.hidden}>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <Form.Group controlId="formEmail">
          <Form.Control required type="email" name="email" placeholder="Your email" />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Control required type="text" name="name" placeholder="Your name" />
          <Form.Control.Feedback type="invalid">
            Please enter your name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formSubject">
          <Form.Control required type="text" name="subject" placeholder="Subject" />
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
          <Form.Control.Feedback type="invalid" name="message">
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
