import React from 'react';
import styles from '../styles/Home.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>
            Welcome to the <span className={styles.mainTitle}>Next.js</span> starter blog app
            </h1>

            <p className={styles.description}>
            Blogs about popular IDEs for developers.
            </p>
        </div>
    )
}


export default Header;