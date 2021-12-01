import styles from '../styles/Home.module.css'
import BlogList from '../components/BlogList'

export default function Home({ blogs}) {
  // console.log(blogs);
  return (
    <div className={styles.container}>
        <BlogList blogs={blogs}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const result = await fetch('http://localhost:3000/api/blogs');
  const blogs = await result.json();
  console.log(blogs);
  return {
      props: {
          blogs
      }
  }
};