import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Contact.module.css";
import Title from "../Title";

// const Contact = () => {
  // const [validated, setValidated] = React.useState(false);

  // const handleSubmit = event => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  export default function Contact() {
    const [state, setState] = React.useState({})
  
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .catch((error) => alert(error))
    }

  return (
    <div id="contact" className={styles.contactWrapper}>
      <Title>CONTACT</Title>
      <p style={{ textAlign: "center" }}>
        Have a question or want to work together?
      </p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      {/* <Form
        name="contact"
        method="post"
        noValidate
        validated={validated}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <p className={styles.hidden}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <Form.Group controlId="formEmail">
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Your email"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Your name"
          />
          <Form.Control.Feedback type="invalid">
            Please enter your name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formSubject">
          <Form.Control
            required
            type="text"
            name="subject"
            placeholder="Subject"
          />
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
        <Button type="submit">Submit</Button>
      </Form> */}
    </div>
  );
};

// export default Contact;
