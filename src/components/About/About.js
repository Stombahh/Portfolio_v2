import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Title from '../Title';
import styles from './About.module.css'

const About = (props) => {

  const data = useStaticQuery(graphql` 
    query {
      allContentfulPerson {
        edges {
          node {
            name
            shortBio {
              shortBio
            }
            title
            image {
              fluid(
                maxWidth: 400
                maxHeight: 400
                quality: 100
                resizingBehavior: CROP
                background: "white"
              ) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);
  const { name, title, shortBio, image } = data.allContentfulPerson.edges[0].node;

  return (
    <div id="about" className={styles.hero}>
      <div className="wrapper">
      <Title>ABOUT</Title>
        <div className={styles.test}>
          <div className={styles.imgContainer}>
            <Img
              className={styles.heroImage}
              alt={name}
              fluid={image.fluid}
              style={{ maxHeight: 'calc(50vh - 4rem)' }}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.heroDetails}>
            <h3 className={styles.heroHeadline}>{name}</h3>
            <p className={styles.heroTitle}>{title}</p>
            <p>{shortBio.shortBio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
