import emailjs from "emailjs-com"
import Link from "next/link"

import { useState } from "react"
import { FaGithub, FaTwitter } from "react-icons/fa"



export default function About({type, template, service, userid} ) {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(service, template, e.target, userid)
    .then((res) => {
      setSuccess(true)
      setError(false)
    }, (error) => {
      setSuccess(false)
      setError(true)
    })
    e.target.reset()
  }

  return (
    <div className="container mx-auto w-11/12 md:max-w-screen-lg mt-10">
      <div className="text-4xl font-bold text-center mb-4">About me</div>
      <div className="flex flex-col md:flex-row gap-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 outline outline-1 outline-gray-200">
        <div className="text-xl mt-4">
          <p className="mb-2">Hey I am <span className="text-zima-200 font-bold">Rei</span> and I like to create cool stuff. I am technically an engineer but I find myself more comfortable
          as a software <span className="text-red-500">artisan</span>. I like to have a lot of control over the product, visually and logically.</p>
          <p className="mb-2">I am a fullstack developer but I always enjoy frontend more.</p>
          <p className="mb-2">Lately I have been focusing in the Web3 space as I am very excited by the tech and the community.</p>
          <p>If you want to contact me you can do so in my socials or just write me an email from the form below.</p>
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
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 outline outline-1 outline-gray-200" onSubmit={sendEmail}>
        {success && <div className="success bg-green-500 text-white w-full py-4 rounded-lg text-center shadow-lg text-lg">Email sent</div>}
        {error && <div className="error bg-red-500 text-white w-full py-4 rounded-lg mt-4 text-center shadow-lg text-lg">Could not send email</div>}
        <div className="text-center text-xl font-bold text-zima-200">Contact Me</div>
        <div className="mt-4">
          <label className="text-gray-700 text-lg font-bold">Name</label>
          <input type="text" className="mt-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your name is?" name="name" required />
        </div>
        <div className="mt-4">
          <label className="text-gray-700 text-lg font-bold">Email</label>
          <input type="email" className="mt-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Write your email" name="email" required />
        </div>
        <div className="mt-4">
          <label className="text-gray-700 text-lg font-bold">Subject</label>
          <input type="text" className="mt-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="What topic you want to talk about?" name="subject" required/>
        </div>
        <div className="mt-4">
          <label className="text-gray-700 text-lg font-bold">Content</label>
          <textarea rows="5"  className="mt-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email size doesn't matter ;)" name="content" required/>
        </div>
        <input type="submit" className="mt-4 mx-auto w-full cursor-pointer transition ease-in duration-200 outline outline-2 outline-green-800 bg-green-600 text-white py-2 px-12 rounded-xl hover:bg-green-500 text-xl focus:outline-green-200" />
      </form>

    </div>
  )
}

export const getServerSideProps = async () => {

  return {
    props: {
      type: process.env.EMAIL_JS_TYPE,
      template: process.env.EMAIL_JS_TEMPLATE, 
      service: process.env.EMAIL_JS_SERVICE,
      userid: process.env.EMAIL_JS_USER_ID
    }
  }
}
