import React from 'react'
import Img from 'gatsby-image'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Project = ({project}) => {

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation
        autoFocus
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = React.useState(false);

  return (
    
    <div>
        <Card style={{maxHeight: '60vh'}}>
          <div style={{overflow: 'hidden'}}>
            <Img
              fluid={project.previewImage.fluid}
            />
          </div>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              {project.shortDescription}
            </Card.Text>
            <Card.Text>{project.technologies}</Card.Text>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Learn more
            </Button>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Card.Body>
        </Card>
    </div>
  );
};

export default Project;
