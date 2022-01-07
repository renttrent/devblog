import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOGS_PATH = "static/blogs"
const PROJECTS_PATH = "static/projects"
const mark_re = /.*\.md/

export const getBlogsMeta = () => {
  const files = fs.readdirSync(path.join(BLOGS_PATH))
  const rv = files.map((blog) => {
    if(!blog.match(mark_re)) return null
    const file = fs.readFileSync(path.join(`${BLOGS_PATH}/${blog}`))
    const { data } = matter(file)
    const slug = blog.replace(".md", "")

    return {
      slug,
      ...data
    }
  })

  if (rv.includes(null)) return []
  return rv
}

export const getLatestBlogs = () => {
  const blogs = getBlogsMeta()
  return blogs.sort((a, b) => (new Date(b.date) - new Date(a.date))).slice(0, 2)
}

export const getAllBlogSlugs = () => {
  const files = fs.readdirSync(path.join(BLOGS_PATH))
  const rv = files.map((blog) => { 
    if(!blog.match(mark_re)) return null
    return { params: { slug: blog.replace(".md", "")} }
  })

  if (rv.includes(null)) return []
  return rv
}

export const getBlogBySlug = (slug) => {
  const file = fs.readFileSync(path.join(`${BLOGS_PATH}/${slug}.md`), 'utf-8')
  const { data, content } = matter(file)
  return {
    data,
    content
  }
}

export const getProjectsMeta = () => {
  const files = fs.readdirSync(path.join(PROJECTS_PATH))
  return files.map((proj) => {
    if(!proj.match(mark_re)) return null
    const file = fs.readFileSync(path.join(`${PROJECTS_PATH}/${proj}`))
    const { data } = matter(file)
    const slug = proj.replace(".md", "")

    return {
      slug,
      ...data
    }
  })
}

export const getLatestProjects = () => {
  const proj = getProjectsMeta()
  return proj.sort((a, b) => (new Date(b.date) - new Date(a.date))).slice(0, 2)
}


export const getAllProjectSlugs = () => {
  const files = fs.readdirSync(path.join(PROJECTS_PATH))
  const rv = files.map((proj) => { 
    if(!proj.match(mark_re)) return null
    return {params: { slug: proj.replace(".md", "")}}
  })

  if (rv.includes(null)) return []

  return rv
}

export const getProjectBySlug = (slug) => {
  const file = fs.readFileSync(path.join(`${PROJECTS_PATH}/${slug}.md`), 'utf-8')
  const { data, content } = matter(file)
  return {
    data,
    content
  }
}
