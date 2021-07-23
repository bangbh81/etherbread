import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

//Use page queries for page components.
export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "mdx" } }) {
      nodes {
        name
      }
    }
  }
`;
export default BlogPage;
