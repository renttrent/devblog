import Link from "next/link"

const Card = ({data}) => {
  return (
    <div className="container shadow-xl p-3 flex flex-col"> 
      <div className="text-lg font-semibold text-gray-800">{data.title}</div>
      <div className="text-sm font-normal text-gray-400">{data.date}</div>
      <img src={data.cover_img} className="mt-4 object-cover h-52 p-2" />   
      <div className="mt-2 text-lg font-normal text-gray-700">{data.desc}</div>
      <Link href={`${data.type}/${data.slug}`}>
        <a className="transition-all duration-200 mt-4 p-2 text-white rounded-md
         bg-gradient-to-r from-zima-200 via-zima-200 to-indigo-400 bg-size-200 bg-pos-0 
         hover:bg-pos-100">
          Go to {data.type}
        </a>
      </Link>
    </div>
  )
}

export default Card
