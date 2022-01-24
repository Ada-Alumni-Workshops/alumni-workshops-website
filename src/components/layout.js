import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Header from "./header";
import Seo from "../components/seo";
import "../styles/global.css";
// import { header, content } from "../styles/layout.module.css";

const Layout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) => {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `);

  const meta = data?.site?.siteMetaData ?? {};

  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <div className="container">
        <div>
          <Header metadata={meta} />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
