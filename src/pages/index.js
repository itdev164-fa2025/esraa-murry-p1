import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Blog Posts</h1>
    <ul>
      {data.allContentfulBlogPost.edges.map(({ node }) => {
        const image = getImage(node.heroImage);
        return (
          <li key={node.id}>
            <GatsbyImage image={image} alt={node.title} />
            <h2><Link to={node.slug}>{node.title}</Link></h2>
            <p>{node.body.childMarkdownRemark.excerpt}</p>
          </li>
        );
      })}
    </ul>
  </Layout>
);

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          heroImage {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
