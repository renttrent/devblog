import Card from "../../components/card";
import { getBlogs } from "../../util/contentful_services";

export default function Blog({blogs}) {
  return (
    <div className="dark:bg-stone-900 dark:text-gray-50 w-full h-screen">
      <div className="container w-11/12 md:max-w-screen-lg mx-auto pt-10">
        {/* <div>rei(blog);</div> */}
        <div className="latest-blogs mb-9">
            <div className="font-mono text-3xl font-bold">All Blogs</div>
            <div className="blogs flex flex-row gap-4 flex-wrap lg:flex-nowrap">
              {blogs && blogs.map((blog) => (<Card key={blog.sys.id} data={blog.fields} type={blog.sys.contentType.sys.id}/>))}
              {blogs.length === 0 && <div className="my-4 text-lg font-medium">No blogs yet</div>}
            </div>
          </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const blogs = await getBlogs()  
  return {
    props: {
      blogs
    }
  }
}