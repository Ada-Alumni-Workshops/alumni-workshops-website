import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const SignupForm = () => {
  const now = new Date();
  const opening = new Date("February 25, 2022 11:55:00 PST");
  if (now.getTime() < opening.getTime()) {
    return "";
  } else {
    return (
      <article>
        <h2>Registration</h2>
        <iframe
          src="https://www.tfaforms.com/4980437"
          height="1100"
          width="800"
          frameborder="0"
        ></iframe>
        <script src="//tfaforms.com/js/iframe_resize_helper.js"></script>
      </article>
    );
  }
};

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
          slug
        }
      }
    }
  `);

  const newsMarkUp = data.allMdx.nodes.map((node) => {
    return (
      <div key={node.id}>
        <h3>
          <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
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
        <SignupForm />
        <article>
