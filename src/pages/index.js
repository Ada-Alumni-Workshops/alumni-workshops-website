import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(
        filter: { frontmatter: { type: { eq: "blog-post" } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            date
            description
            image {
              publicURL
            }
            type
            title
            repo
          }
        }
      }
    }
  `);

  const newsMarkUp = data.allMdx.nodes.map((node) => {
    return (
      <div key={node.id}>
        <h3>
          <Link to={node.slug}>{node.frontmatter.title}</Link>
        </h3>
        <p>{node.frontmatter.description}</p>
      </div>
    );
  });

  return (
    <>
      <Layout>
        <h1>Lovelace Learning Labs</h1>
        <p>
          Lovelace Learning Labs is a free, biannual continuing education series
          for the Ada alum community, focusing on technical skills, career
          advancement, and personal development.
        </p>
        <article>
          <h2>Lovelace Learning Labs News</h2>
          <section className="news">{newsMarkUp}</section>
        </article>
      </Layout>
    </>
  );
};

export default IndexPage;
