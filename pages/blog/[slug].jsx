import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import Image from "next/image"
import { getBlogBySlug, getBlogs } from "../../util/contentful_services"

export const getStaticPaths = async () => {
  const blogs = await getBlogs()

  const paths = blogs.map((blog) => {
    return {
      params: {
        slug: blog.fields.slug
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async  ({ params: { slug }}) => {
  const blog = await getBlogBySlug(slug)
  return {
    props: {
      blog
    },
    revalidate: 10
  }
}

export default function Blog({blog}) {
  const imgurl = blog.fields.cover_img.fields.file.url
  const date = new Date(blog.fields.date).toLocaleString("en-US", { day:"numeric", month: "short", year: "numeric" })
  const fileName = blog.fields.cover_img.fields.file.fileName
  const width = Math.round(blog.fields.cover_img.fields.file.details.image.width)
  const height = Math.round(blog.fields.cover_img.fields.file.details.image.height)

  return (
    <div className="dark:bg-stone-900 dark:text-gray-50 w-full">
      <div className="container mx-auto pt-10 w-11/12 md:max-w-screen-lg">
        <div className="title font-bold text-2xl mb-2">{blog.fields.title}</div>
        <div className="date font-semibold text-lg text-gray-600 dark:text-gray-400">{date}</div>
        <div className="image mt-4">
          <Image src={`http:${imgurl}`} className="object-cover w-full max-h-80" alt={fileName} width={width} height={height} />
        </div>
        <div className="content mx-auto max-w-screen-lg prose pt-10 
        prose-p:text-justify prose-p:pt-2 prose-h1:pb-4 
        prose-hr:m-0 prose-p:m-0 prose-p:py-2 
        dark:prose-headings:text-gray-100
        dark:prose-p:text-gray-300
        dark:prose-a:text-indigo-400
        dark:prose-li:text-gray-400">
          <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(blog.fields.content) }}></div>
        </div>
      </div>
    </div>
  )
}