import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Title from "../Title";
import styles from "./About.module.css";

const About = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPerson {
        edges {
          node {
            name
            shortBio {
              childMarkdownRemark {
                html
              }
            }
            title
            image {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const {
    name,
    title,
    shortBio,
    image
  } = data.allContentfulPerson.edges[0].node;

  return (
    <div id="about" className="wrapper">
      <Title>ABOUT</Title>
      <div className={styles.gridContainer}>
        <div className={styles.gridImg}>
          <Img
            alt={name}
            fluid={image.fluid}
            style={{ maxHeight: "calc(50vh - 4rem)" }}
            imgStyle={{ objectFit: "contain" }}
            className={styles.personImage}
          />
        </div>
        <div className={styles.gridPerson}>
          <h3 className={styles.personName}>{name}</h3>
          <p className={styles.personTitle}>{title}</p>
          <div className={styles.personBio} dangerouslySetInnerHTML={{ __html: shortBio.childMarkdownRemark.html }} />
        </div>
      </div>
    </div>
  );
};

export default About;
