import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPost = ({ data }) => {
  const { title, body } = data.contentfulBlogPost;
  return (
    <Layout>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default BlogPost;
