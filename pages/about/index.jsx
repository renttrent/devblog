export default function About() {
  return (
    <div className="container mx-auto w-11/12 md:max-w-screen-lg mt-10">
      <div className="text-4xl font-bold text-center">About me</div>
      <div className="flex flex-col md:flex-row gap-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-xl mt-4">
          <p className="mb-2">Hey I am <span className="text-zima-200 font-bold">Rei</span> and I like to create cool stuff. I am technically an engineer but I find myself more comfortable
          as a software "<span className="text-red-500">artisan</span>". I like to have a lot of control over the product, visually and logically.</p>
          <p className="mb-2">I am a fullstack developer but I always enjoy frontend more.</p>
          <p className="mb-2">Lately I have been focusing in the Web3 space as I am very excited by the tech and the community.</p>
          <p>If you want to contact me you can do so in my socials or just write me an email from the form below.</p>
        </div>
        <div>
          <img src="profile.jpg" className="rounded-full shadow-lg shadow-gray-300" />
        </div>
      </div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mt-4">
          <label className="text-gray-700 text-lg font-bold">Email</label>
          <input type="email" className="mt-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Write your email" />
        </div>
        <div className="mt-4">
          <label className="text-gray-700 text-lg font-bold">Subject</label>
          <input type="text" className="mt-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="What topic you want to talk about?" />
        </div>
        <div className="mt-4">
          <label className="text-gray-700 text-lg font-bold">Content</label>
          <textarea rows="5"  className="mt-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email size doesn't matter ;)" />
        </div>
        <button className="mt-4 transition ease-in duration-200 bg-fuchsia-600 text-white py-2 px-12 rounded-xl hover:bg-fuchsia-500 text-xl focus:outline-fuchsia-200">SEND</button>
      </form>
    </div>
  )
}