import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Blog({ blog}) {
  return (
    <div className={styles.container}>
        <h1>{blog.title}</h1>
        <Image src={blog.img} alt="IDE Logo" width={500} height={500}></Image>
        <p>{blog.body}</p>
        <Link href="/">Back Home</Link>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const result = await fetch(`http://localhost:3000/api/blogs/${context.params.id}`);
  const blog = await result.json();
  return {
      props: {
          blog
      }
  }
};

export const getStaticPaths = async () => {

  const result = await fetch(`http://localhost:3000/api/blogs/`);
  const blogs = await result.json();
  const paths = blogs.map(blog => ({params: {id: blog.id}}));

  return { paths, fallback: false }

};