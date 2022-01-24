import * as React from "react";
import Layout from "./layout";

const WorkshopLayout = ({ children, pageContext }) => {
  const { title, description } = pageContext.frontmatter;
  return (
    <Layout title={title} description={description}>
      {children}
    </Layout>
  );
};

export default WorkshopLayout;
