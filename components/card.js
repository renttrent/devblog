import Link from "next/link"

const Card = ({data}) => {
  return (
    <div className="container shadow-xl p-3 flex flex-col rounded-lg outline outline-1 outline-gray-200 mt-4"> 
      <div className="text-2xl font-semibold text-gray-800 mt-2">{data.title}</div>
      <div className="text-sm font-normal text-gray-400">{data.date}</div>
      <img src={data.cover_img} className="mt-4 object-cover h-52 p-2" />   
      <div className="mt-2 text-lg font-normal text-gray-700">{data.desc}</div>
      <Link href={`${data.type}/${data.slug}`}>
        <button className="transition-all duration-200 text-center mt-4 p-2 text-white rounded-md
         bg-gradient-to-tl from-zima-200 via-zima-200 to-indigo-400 bg-size-200 bg-pos-0 
         hover:bg-pos-100 mb-4 focus:outline-indigo-700">
          Go to {data.type === "projects" ? "project" : "blog"}
        </button>
      </Link>
    </div>
  )
}

export default Card
