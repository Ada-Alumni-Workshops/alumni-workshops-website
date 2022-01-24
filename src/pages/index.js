import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetWorkshops {
      allMdx(sort: { fields: frontmatter___date }) {
        nodes {
          frontmatter {
            date(formatString: "YYYYY-MM-DD")
            description
            image {
              publicURL
            }
            title
            repo
          }
          id
          slug
        }
      }
    }
  `);

  const workshopMarkUp = data.allMdx.nodes.map((node) => {
    return (
      <div key={node.id}>
        <h2>
          <Link to={node.slug}>{node.frontmatter.title}</Link>
        </h2>
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
          <h2>Upcoming Workshops</h2>
          <section className="workshops">{workshopMarkUp}</section>
        </article>
      </Layout>
    </>
  );
};

export default IndexPage;
