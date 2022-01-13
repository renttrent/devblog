import { createClient } from "contentful"


export const client = createClient({
  space: process.env.CONTENT_SPACE_ID,
  accessToken: process.env.CONTENT_DELIVERY_TOKEN,
});

export const getProjects = async () => {
  const projects = await client.getEntries({content_type: "project", order: "fields.date"})
  return projects.items
}

export const getBlogs = async () => {
  const blogs = await client.getEntries({content_type: "blog", order: "fields.date"})
  return blogs.items
}

export const getBlogBySlug = async (slug) => {
  const blog = await client.getEntries({content_type: "blog", "fields.slug": slug})
  return blog.items[0]
}
export const getProjectBySlug = async (slug) => {
  const project = await client.getEntries({content_type: "project", "fields.slug": slug})
  return project.items[0]
}
