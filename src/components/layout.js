import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
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
          siteUrl
        }
      }
    }
  `);

  const meta = {
    title: title || data.site.siteMetadata.title,
    description: description || data.site.siteMetadata.description,
    image: image || data.site.siteMetadata.image,
    path: path || data.site.siteMetadata.siteUrl,
  };

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        image={meta.image}
        path={meta.path}
      />
      <div className="container">
        <div>
          <Header
            title={meta.title}
            description={meta.description}
            image={meta.image}
          />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
