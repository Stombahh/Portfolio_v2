import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import favicon from "../../static/favicon.ico";
import Helmet from "react-helmet";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

class RootIndex extends React.Component {
  render() {
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [author] = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title="Tommi Ilvonen - Software Developer">
            <link rel="icon" href={favicon} />
          </Helmet>
          <Hero data={author.node} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
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
`;
