import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import CardList from "../components/card_list";

const UpcomingWorkshops = () => {
  const data = useStaticQuery(graphql`
    query GetWorkshops {
      allMdx(
        sort: { fields: frontmatter___date, order: ASC }
        filter: { frontmatter: { type: { eq: "workshop" } } }
      ) {
        nodes {
          id
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            description
            image {
              publicURL
            }
            repo
            title
            type
          }
          slug
        }
      }
    }
  `);

  console.log(data.allMdx.nodes);

  const cardData = data.allMdx.nodes.map((node) => {
    return {
      id: node.id,
      type: node.frontmatter.type,
      title: node.frontmatter.title,
      repo: node.frontmatter.repo,
      date: node.frontmatter.date,
      description: node.frontmatter.description,
      slug: node.slug,
      image: (
        <img
          src={node.frontmatter.image.publicURL}
          alt={node.frontmatter.title}
        />
      ),
    };
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
          <section className="workshops">
            <CardList cardData={cardData} />
          </section>
        </article>
      </Layout>
    </>
  );
};

export default UpcomingWorkshops;
