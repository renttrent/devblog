import Card from "../../components/card";
import { getProjects } from "../../util/contentful_services";

export default function Projects({projects}) {
  return (
    <div className="dark:bg-stone-900 dark:text-gray-50 w-full h-full pt-10 pb-10"> 
      <div className="container mx-auto w-11/12 md:max-w-screen-lg">
        <div className="latest-blogs">
            <div className="font-mono text-3xl font-bold">All Projects</div>
            <div className="blogs grid sm:grid-cols-2 gap-4 flex-wrap lg:flex-nowrap">
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