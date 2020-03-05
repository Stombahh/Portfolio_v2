import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Experience from "./Experience/Experience";
import Title from "../../components/Title";

const Experiences = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulExperience(sort: { fields: id }) {
        edges {
          node {
            title
            company
            companyB
            period
            periodB
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `);
  const experiences = data.allContentfulExperience.edges;

  return <div id="experience" className="wrapper">
      <Title>EXPERIENCE</Title>
        {experiences.map(({ node }) => {
          return <Experience experience={node} />;
        })}
  </div>;
};

export default Experiences;
