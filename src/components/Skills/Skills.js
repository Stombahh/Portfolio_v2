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
          <Col lg={4}>
            <h2>Technologies</h2>
            <Row>
              <Col lg={4} xs={4}>
                <div className={styles.skill}>
                  <FaVuejs />
                  <h4>Vue</h4>
                </div>
              </Col>
              <Col lg={4} xs={4}>
                <div className={styles.skill}>
                  <FaReact />
                  <h4>React</h4>
                </div>
              </Col>
              <Col lg={4} xs={4}>
                <div className={styles.skill}>
                  <DiJavascript1 />
                  <h4>JavaScript</h4>
                </div>
              </Col>
              <Col lg={4} xs={4}>
                <div className={styles.skill}>
                  <DiHtml5 />
                  <h4>HTML5</h4>
                </div>
              </Col>
              <Col lg={4} xs={4}>
                <div className={styles.skill}>
                  <DiCss3 />
                  <h4>CSS3</h4>
                </div>
              </Col>
              <Col lg={4} xs={4}>
                <div className={styles.skill}>
                  <p>C#</p>
                </div>
              </Col>
              <Col lg={7} xs={4}>
                <div className={styles.skill}>
                  <h2>Knockout.js</h2>
                </div>
              </Col>
              <Col lg={4} xs={4}>
                <div className={styles.skill}>
                  <p>SQL</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <h2>Tools</h2>
            <Row>
              <Col lg={4} xs={4}>
                <div className={styles.skill}>
                  <FaJenkins />
                  <h4>Jenkins</h4>
                </div>
              </Col>
              <Col lg={4} xs={4}>
                <div className={styles.skill}>
                  <FaDocker />
                  <h4>Docker</h4>
                </div>
              </Col>
              <Col lg={4} xs={4}>
                <div className={styles.skill}>
                  <FaGitAlt />
                  <h4>Git</h4>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={4}><h2>Other</h2>
            <Row>
              <Col lg={6} xs={4}>
                <div className={styles.skill}>
                  <h2>Scrum</h2>
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
