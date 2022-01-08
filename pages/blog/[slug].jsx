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
  return (
    <div className="dark:bg-stone-900 dark:text-gray-50 w-full">
      <div className="container mx-auto mt-10 w-11/12 md:max-w-screen-lg">
        <div className="title font-bold text-2xl mb-2">{blog.data.title}</div>
        <div className="date font-semibold text-lg text-gray-600 dark:text-gray-400">{blog.data.date}</div>
        <div className="image mt-4">
          <img src={blog.data.cover_img} className="object-cover w-full max-h-80" alt="cover image" />
        </div>
        <div className="content mx-auto max-w-screen-lg prose pt-10 
        prose-p:text-justify prose-p:pt-2 prose-h1:pb-4 
        prose-hr:m-0 prose-p:m-0 prose-p:py-2 
        dark:prose-headings:text-gray-100
        dark:prose-p:text-gray-300
        dark:prose-a:text-indigo-400
        dark:prose-li:text-gray-400">
          <div dangerouslySetInnerHTML={{ __html: marked(blog.content) }}></div>
        </div>
      </div>
    </div>
  )
}