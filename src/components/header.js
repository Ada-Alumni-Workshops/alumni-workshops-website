import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "./navigation";
import menuItems from "../navigation.json";
import * as styles from "../styles/header.module.css";

const Header = (props) => {
  return (
    <header>
      <div>
        <Link to="/">
          <StaticImage
            src="../images/ada_logo.png"
            alt={props.description}
            width={610}
            className={styles.logoImage}
          />
        </Link>
      </div>
      <Navigation sites={menuItems} />
    </header>
  );
};

export default Header;
