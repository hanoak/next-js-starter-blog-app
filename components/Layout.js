import React from 'react'
import Header from './header';
import Footer from './Footer';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.container}>
            <Head>
                <title>Next.js starter blog app</title>
                <meta name="description" content="This is a Next.js starter app example" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Header />
                { children }
            </main>

            <Footer />
        </div>
    </>
    )
}

export default Layout;