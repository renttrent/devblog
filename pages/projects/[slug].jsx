import { getAllProjectSlugs, getProjectBySlug } from "../../util/getter"
import { marked } from "marked"

export const getStaticPaths = async () => {
  const slugs = getAllProjectSlugs()
  return {
    paths: slugs,
    fallback: false
  }
}

export const getStaticProps = async  ({ params: { slug }}) => {
  const project = getProjectBySlug(slug)
  return {
    props: {
      project
    }
  }
}

export default function Project({project}) {
  return (
    <>
      <div className="container mx-auto mt-10 max-w-screen-lg w-2/3">
        <div className="title font-bold text-2xl mb-2">{project.data.title}</div>
        <div className="date font-semibold text-lg text-gray-600">{project.data.date}</div>
        <div className="image mt-4">
          <img src={project.data.cover_img} className="object-cover w-full max-h-80" />
        </div>
        <div className="content mx-auto max-w-screen-lg prose mt-10 prose-p:text-justify">
          <div dangerouslySetInnerHTML={{ __html: marked(project.content) }}></div>
        </div>
      </div>
    </>
  )
}