import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
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
          <h2>Example of Past Offerings </h2>
          <ul>
            <li>Be Your Own PM</li>
            <li>Technical Patterns: Concurrency</li>
            <li>Financial Stuff I Wish I had Known Before</li>
            <li>Writing Excellent Technical Documentation</li>
            <li>Networking Best Practices</li>
          </ul>
        </article>
      </Layout>
    </>
  );
};

export default AboutPage;
