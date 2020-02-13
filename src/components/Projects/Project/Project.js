import React from "react";
import Img from "gatsby-image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

import "./Project.css";

const Project = ({ project }) => {
  function ProjectModal(props) {
    return (
      <Modal
        id={project.id}
        {...props}
        size="lg"
        centered
      >
        <Carousel interval={null}>
          {project.otherImages.map(({ fluid }) => {
            return (
              <Carousel.Item style={{ background: "black" }}>
                <img src={fluid.src} />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Modal.Header>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{project.fullDescription.fullDescription}</p>
          <p>{project.technologies}</p>
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "left" }}>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Card>
        <div style={{ overflow: "hidden" }}>
          <Img className="previewImage" fluid={project.previewImage.fluid} />
        </div>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.shortDescription}</Card.Text>
          <Card.Text>{project.technologies}</Card.Text>
        </Card.Body>
        <Card.Body style={{ paddingTop: "0" }}>
          <Button onClick={() => setModalShow(true)}>Learn more</Button>
        </Card.Body>
      </Card>
      <ProjectModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Project;
