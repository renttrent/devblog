import { getBlogsMeta } from "../../util/getter";

export default function Blog({blogs}) {
  console.log(blogs)
  return (
    <div>
      <div>rei(blog);</div>
      {blogs.map((blog, index) => (
        <div key={index}>
          <div>{blog.slug}</div>
          <div>{blog.title}</div>
          <div>{blog.date}</div>
          <div>{blog.desc}</div>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = () => {
  const blogs = getBlogsMeta()  
  return {
    props: {
      blogs
    }
  }
}