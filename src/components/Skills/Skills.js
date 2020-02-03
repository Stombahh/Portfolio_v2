import React from 'react'
import Card from 'react-bootstrap/Card';
import { DiJavascript1 } from 'react-icons/di';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { FaVuejs } from 'react-icons/fa';

import styles from './Skills.module.css';


class Skills extends React.Component {
  render() {

    return (
      <div className="wrapper">
        <h1 style={{ marginBottom: '50px'}}>Skills</h1>
        <div className={styles.skillsWrapper}>
          <Card style={{ border: 'none', width: '18rem' }}>
            <DiJavascript1/>
            <Card.Body>
              <Card.Title className={styles.cardTitle}>JavaScript</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: 'none', width: '18rem' }}>
            <DiHtml5/>
            <Card.Body>
              <Card.Title className={styles.cardTitle}>HTML5</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: 'none', width: '18rem' }}>
            <DiCss3/>
            <Card.Body>
              <Card.Title className={styles.cardTitle}>CSS3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ border: 'none', width: '18rem' }}>
            <FaVuejs/>
            <Card.Body>
              <Card.Title className={styles.cardTitle}>Vue</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

export default Skills
