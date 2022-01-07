import { FaTwitter, FaGithub } from "react-icons/fa"
import Link from "next/link"
import { getLatestBlogs, getLatestProjects } from "../util/getter";
import Card from "../components/card";
import { FaBriefcase } from "react-icons/fa"

export default function Home({blogs, projects}) {
  return (
    <>
      <div className="home-section w-11/12 md:max-w-screen-lg mx-auto">
        <div className="info-about-me mt-12">
          <span className="block font-mono font-extrabold text-5xl">Hi!</span>
          <span className="block font-sans font-medium text-2xl my-2">
            I am Rei and I make websites and web3 DApps.
          </span>
          <div className="block font-sans text-lg text-justify py-7 px-8 bg-zima-100 rounded-lg outline outline-1 outline-gray-200 shadow-sm">
            I like to work on open source projects and make some music or design
            when I have free time. You can send me an email <Link href="mailto: reithedev@protonmail.com" passHref><a className="text-red-500">here</a></Link> or{" "}
            <b>dm</b> me in my socials:
            <span className="flex flex-row gap-4 text-zima-200 pt-2">
              <Link href="https://twitter.com/reithedev" passHref>
                <a className="outline-none focus:text-red-500 hover:opacity-60"><FaTwitter size={24}/></a>
              </Link>
              <Link href="https://github.com/renttrent" passHref>
                <a className="outline-none focus:text-red-500 hover:opacity-60"><FaGithub size={24}/></a>
              </Link>
            </span>
          </div>
        </div>
        <div className="construction w-full text-center text-lg text-white
        bg-gradient-to-br from-red-600 to-orange-500 p-4 rounded-xl mt-5 mb-5">
          Website under construction! <FaBriefcase className="inline-block mb-1 ml-2" />
        </div>
        <div className="latest-projects">
          <div className="font-mono text-3xl font-bold mt-8">
            Latest Projects
          </div>
          <div className="projects flex flex-row gap-4">
            {projects && projects.map((proj, index) => (<Card key={index} data={proj}/>))}
            {projects.length === 0 && <div className="my-4 text-lg font-medium">No projects yet</div>}
          </div>
          <div className="projects-grid"></div>
        </div>
        <div className="latest-blogs mb-9">
          <div className="font-mono text-3xl font-bold mt-8">Latest Blogs</div>
          <div className="blogs flex flex-row gap-4 flex-wrap lg:flex-nowrap ">
            {blogs && blogs.map((blog, index) => (<Card key={index} data={blog}/>))}
            {blogs.length === 0 && <div className="my-4 text-lg font-medium">No blogs yet</div>}
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