import Card from "../../components/card";
import { getBlogsMeta } from "../../util/getter";

export default function Blog({blogs}) {
  console.log(blogs)
  return (
    <div className="container w-2/3 mx-auto mt-4 max-w-screen-lg">
      {/* <div>rei(blog);</div> */}
      <div className="latest-blogs mb-9">
          <div className="font-mono text-lg font-bold mt-4">All Blogs</div>
          <div className="blogs flex flex-row gap-4 flex-wrap lg:flex-nowrap">
            {blogs && blogs.map((blog, index) => (<Card key={index} data={blog}/>))}
          </div>
        </div>
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