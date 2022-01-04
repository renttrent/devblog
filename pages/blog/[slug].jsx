import { getAllBlogSlugs, getBlogBySlug } from "../../util/getter"
import { marked } from "marked"

export const getStaticPaths = async () => {
  const slugs = getAllBlogSlugs()
  return {
    paths: slugs,
    fallback: false
  }
}

export const getStaticProps = async  ({ params: { slug }}) => {
  const blog = getBlogBySlug(slug)
  return {
    props: {
      blog
    }
  }
}

export default function Blog({blog}) {
  console.log(blog)
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="title font-bold text-6xl mb-2">{blog.data.title}</div>
        <div className="date font-semibold text-lg text-gray-600">{blog.data.date}</div>
        <div className="image mt-4">
          <img src={blog.data.cover_img} className="object-cover w-full h-52" />
        </div>
        <div className="content prose mt-10">
          <div dangerouslySetInnerHTML={{ __html: marked(blog.content) }}></div>
        </div>
      </div>
    </>
  )
}