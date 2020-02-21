import React from 'react';
import Title from '../Title';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';
import { FaVuejs, FaReact, FaJenkins, FaDocker, FaGitAlt } from 'react-icons/fa';

import styles from './Skills.module.css';


class Skills extends React.Component {

  render() {
    return (
      <div id="skills" className="wrapper">
        <Title>SKILLS</Title>
        <Row>
          <Col lg={6} className={styles.techColumn}>
            <h2>Technologies</h2>
            <Row>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <FaVuejs />
                  <h4>Vue</h4>
                </div>
              </Col>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <FaReact />
                  <h4>React</h4>
                </div>
              </Col>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <DiJavascript1 />
                  <h4>JavaScript</h4>
                </div>
              </Col>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <DiHtml5 />
                  <h4>HTML5</h4>
                </div>
              </Col>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <DiCss3 />
                  <h4>CSS3</h4>
                </div>
              </Col>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <p>C#</p>
                </div>
              </Col>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <h4>Knockout.js</h4>
                </div>
              </Col>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <p>SQL</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <h2>Other</h2>
            <Row>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <FaJenkins />
                  <h4>Jenkins</h4>
                </div>
              </Col>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <FaDocker />
                  <h4>Docker</h4>
                </div>
              </Col>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <FaGitAlt />
                  <h4>Git</h4>
                </div>
              </Col>
              <Col lg={3} xs={4}>
                <div className={styles.skill}>
                  <h4>Scrum</h4>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Skills
