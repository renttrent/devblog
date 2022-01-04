import { FaTwitter, FaGithub } from "react-icons/fa"
import Link from "next/link"
import { getAllBlogSlugs, getLatestBlogs, getLatestProjects } from "../util/getter";
import Card from "../components/card";
import { FaBriefcase } from "react-icons/fa"

export default function Home({blogs, projects}) {
  return (
    <>
      <div className="home-section md:w-3/4 xl:1/3 lg:w-1/2 w-8/12 mx-auto">
        <div className="info-about-me mt-12">
          <span className="block font-mono font-extrabold text-5xl">Hi!</span>
          <span className="block font-sans font-medium text-2xl my-2">
            I am Rei and I make websites and web3 DApps.
          </span>
          <span className="block font-sans text-lg text-justify p-3 py-7 bg-zima-100 rounded-lg">
            I like to work on open source projects and make some music or design
            when I have free time. You can send me an email <Link href="mailto: reithedev@protonmail.com"><a className="text-red-500">here</a></Link> or{" "}
            <b>dm</b> me in my socials:
            <span className="flex flex-row gap-4 text-zima-200 pt-2">
              <Link href="https://twitter.com/reithedev">
                <a><FaTwitter /></a>
              </Link>
              <Link href="https://github.com/renttrent">
                <a><FaGithub /></a>
              </Link>
            </span>
          </span>
        </div>
        <div className="construction w-full text-center text-lg text-white
        bg-gradient-to-br from-red-600 to-orange-500 p-4 rounded-xl mt-5 mb-5">
          Website under construction! <FaBriefcase className="inline-block mb-1 ml-2" />
        </div>
        <div className="latest-projects">
          <div className="font-mono text-lg font-bold mt-4">
            Latest Projects
          </div>
          <div className="projects flex flex-row gap-4">
            {projects && projects.map((proj, index) => (<Card key={index} data={proj}/>))}
          </div>
          <div className="projects-grid"></div>
        </div>
        <div className="latest-blogs mb-9">
          <div className="font-mono text-lg font-bold mt-4">Latest Blogs</div>
          <div className="blogs flex flex-row gap-4 sm:flex-wrap md:flex-nowrap">
            {blogs && blogs.map((blog, index) => (<Card key={index} data={blog}/>))}
          </div>
        </div>
      </div>
    </>
  );
}


export const getStaticProps = async () => {
  const latest_blogs = getLatestBlogs()
  const latest_projects = getLatestProjects()
  return {
    props: {
      blogs: latest_blogs,
      projects: latest_projects
    }
  }
}