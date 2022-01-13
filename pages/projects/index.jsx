import Card from "../../components/card";
import { getProjects } from "../../util/contentful_services";

export default function Projects({projects}) {
  console.log(projects)
  return (
    <div className="dark:bg-stone-900 dark:text-gray-50 w-full h-screen"> 
      <div className="container mx-auto pt-10 w-11/12 md:max-w-screen-lg">
        {/* <div>rei(blog);</div> */}
        <div className="latest-blogs mb-9">
            <div className="font-mono text-3xl font-bold mt-4">All Projects</div>
            <div className="blogs flex flex-row gap-4 flex-wrap lg:flex-nowrap">
              {projects && projects.map((proj) => (<Card key={proj.sys.id} data={proj.fields} type={proj.sys.contentType.sys.id}/>))}
              {projects.length === 0 && <div className="my-4 text-lg font-medium">No projects yet</div>}
            </div>
          </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const projects = await getProjects()  
  return {
    props: {
      projects
    }
  }
}