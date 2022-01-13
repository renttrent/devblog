import Image from "next/image"
import Link from "next/link"

const Card = ({data, type}) => {
  console.log("Card",data)

  const imgurl = data.cover_img.fields.file.url
  const date = new Date(data.date).toLocaleString("en-US", { day:"numeric", month: "short", year: "numeric" })
  const fileName = data.cover_img.fields.file.fileName
  const width = Math.round(data.cover_img.fields.file.details.image.width / 3)
  const height = Math.round(data.cover_img.fields.file.details.image.height / 3)

  return (
    <div className="container shadow-xl p-3 flex flex-col rounded-lg outline outline-1 outline-gray-200 mt-4 dark:outline-neutral-900"> 
      <div className="text-2xl font-semibold text-gray-800 mt-2 dark:text-gray-50">{data.title}</div>
      <div className="text-sm font-normal text-gray-400 mb-2 mt-2">{date}</div>
      <Image src={`http:${imgurl}`} className="mt-4 object-cover p-2" alt={fileName}
        width={width} height={height}/>   
      <div className="mt-2 text-lg font-normal text-gray-700 dark:text-neutral-300">{data.desc}</div>
      <Link href={`${type}/${data.slug}`} passHref>
        <button className="transition-all duration-200 text-center mt-4 p-2 text-white rounded-md
         bg-gradient-to-tl from-zima-200 via-zima-200 to-indigo-400 bg-size-200 bg-pos-0 
         hover:bg-pos-100 mb-4 focus:outline-indigo-700">
          Go to {type}
        </button>
      </Link>
    </div>
  )
}

export default Card
