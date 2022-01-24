
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/navigation.module.css';

type Site = {
    name: string;
    url: string;
}

type NavigationProps = {
    sites: Site[];
}

const Navigation: React.FC<NavigationProps> = ({sites}) => {
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        if (window !== undefined) {
            setActive(window.innerWidth > 620);
        }
    }, []);

    const siteMenuItems = sites.map((site) => {
        return <li key={site.name}>
            <Link to={site.url}>{site.name}</Link>
        </li>
    });

    const toggleActive = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        setActive( (previousState) => !previousState );
    }

    return <nav className={`${styles.navigation} ${active ? styles.active: ''}`}>
        <ul>
            {siteMenuItems}
        </ul>
        <button className={styles.icon} id="toggle" onClick={toggleActive}>
            <div className={`${styles.line} ${styles.line1}`}></div>
            <div className={`${styles.line} ${styles.line2}`}></div>
        </button>
    </nav>;
};

export default Navigation;