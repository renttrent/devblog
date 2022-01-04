import Card from "../../components/card";
import { getProjectsMeta } from "../../util/getter";

export default function Blog({projects}) {
  return (
    <div className="container w-2/3 mx-auto mt-4 max-w-screen-lg">
      {/* <div>rei(blog);</div> */}
      <div className="latest-blogs mb-9">
          <div className="font-mono text-lg font-bold mt-4">All Projects</div>
          <div className="blogs flex flex-row gap-4 flex-wrap lg:flex-nowrap">
            {projects && projects.map((blog, index) => (<Card key={index} data={blog}/>))}
          </div>
        </div>
    </div>
  );
}

export const getStaticProps = () => {
  const projects = getProjectsMeta()  
  return {
    props: {
      projects
    }
  }
}