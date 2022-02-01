import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"
import Link from "next/link"
import Card from "../components/card";
import { FaBriefcase, FaSun, FaMoon } from "react-icons/fa"
import { getBlogs, getProjects } from "../util/contentful_services";

export default function Home({blogs, projects, dark, setDark}) {
  
  return (
    <div className="dark:bg-stone-900 dark:text-gray-50">
      <div className="home-section w-11/12 md:max-w-screen-lg mx-auto">
        <div className="info-about-me pt-12">
          <div className="flex flex-row justify-between align-middle">
            <span className="block font-mono font-extrabold text-5xl">Hi!</span>
            <button className="text-orange-300 dark:text-sky-200 text-xl" onClick={()=>setDark(!dark)} > {dark ? <FaMoon />:<FaSun/>}</button>
          </div>
          <span className="block font-sans font-medium text-2xl my-2">
            I am Rei and I make websites and web3 DApps.
          </span>
          <div className="block font-sans text-lg text-justify py-7 px-8 bg-zima-100 dark:bg-neutral-800 dark:outline-neutral-900 rounded-lg outline outline-1 outline-gray-200 shadow-sm">
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
              <Link href="https://www.linkedin.com/in/rei-b-95894bb6/" passHref>
                <a className="outline-none focus:text-red-500 hover:opacity-60"><FaLinkedinIn size={24}/></a>
              </Link>
            </span>
          </div>
        </div>
      
        <div className="latest-projects">
          <div className="font-mono text-3xl font-bold mt-8">
            Latest Projects
          </div>
          <div className="projects grid sm:grid-cols-2 gap-4">
            {projects && projects.map((proj) => (<Card key={proj.sys.id} data={proj.fields} type={proj.sys.contentType.sys.id}/>))}
            {projects.length === 0 && <div className="my-4 text-lg font-medium">No projects yet</div>}
          </div>
        </div>
        <div className="latest-blogs pb-9">
          <div className="font-mono text-3xl font-bold mt-8">Latest Blogs</div>
          <div className="blogs grid sm:grid-cols-2 gap-4 flex-wrap lg:flex-nowrap ">
            {blogs && blogs.map((blog) => (<Card key={blog.sys.id} data={blog.fields} type={blog.sys.contentType.sys.id}/>))}
            {blogs.length === 0 && <div className="my-4 text-lg font-medium">No blogs yet</div>}
          </div>
        </div>
      </div>
    </div>
  );
}


export const getStaticProps = async () => {
  const latest_blogs = await getBlogs()
  const latest_projects = await getProjects()
  return {
    props: {
      blogs: latest_blogs.slice(0, 4),
      projects: latest_projects.slice(0, 4),
    }
  }
}