import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Blogs = ({blog}) => {
    return (
        <a href={`/blog/${blog.id}` } className={styles.card}>
            <h2>{ blog.title }</h2>
            <Image src={blog.img} alt="IDE Logo" width={500} height={500}></Image>
            <p>{blog.body}</p>
        </a>
    )
}

export default Blogs;