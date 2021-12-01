import React from 'react'
import styles from '../styles/Home.module.css'
import Blogs from './Blogs';

const BlogList = ({ blogs}) => {
    return (
        <div className={styles.grid}>
            
            {
                blogs.map(blog => (
                    <Blogs key={blog.id} blog={blog}/>
                ))
            }
          
        </div>
    )
}

export default BlogList;