import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CardColumns from "react-bootstrap/CardColumns";

import Project from "./Project/Project";

// import styles from './Projects.module.css'
// import './Projects.module.css'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulProject(sort: { fields: id }) {
        edges {
          node {
            title
            technologies
            fullDescription {
              fullDescription
            }
            shortDescription
            previewImage {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            otherImages {
              fluid(
                quality: 100 
                maxHeight: 500
                resizingBehavior: SCALE
              ) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allContentfulProject.edges;

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>Projects</h1>
      <CardColumns>
        {projects.map(({ node }) => {
          return <Project project={node} />;
        })}
      </CardColumns>
    </div>
  );
};

export default Projects;
