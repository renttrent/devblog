import Link from "next/link";
import { useRef } from "react";
import Typical from "react-typical"

export default function Header() {

  const ref = useRef()

  // const aroundMouse = (e) => {
    
  //   ref.current.className = `absolute w-12 h-12 rounded bg-indigo-700 rounded-full opacity-60`
  //   ref.current.style.left = `${e.pageX-20}px`
  //   ref.current.style.top = `${e.pageY-20}px`
  // }

  // const deleteMouse = (e) => {
  //   ref.current.className = "hidden"
  // }
  //onMouseOver={aroundMouse} onMouseLeave={deleteMouse}

  return (
    <>
      <div className="font-mono font-extrabold text-gray-900 mx-auto text-center p-4 text-lg">
        <Typical
          steps={
            [
              'Hey there!', 1000,
              'rei(thedev);', 1000,
            ]
          }
        >
        </Typical>
      </div>
    
      <div className="bg-zima-200 text-white p-3 ">
        
        <div className="z-20 flex flex-row justify-between w-11/12 md:max-w-screen-lg mx-auto text-center text-lg font-mono font-semibold">
          <Link href="/">
            <a className="transition-all ease-in bg-clip-text hover:text-transparent bg-gradient-to-b from-zima-200 to-indigo-700">home</a>
          </Link>
          <Link href="/about">
            <a className="transition-all ease-in bg-clip-text hover:text-transparent bg-gradient-to-b from-zima-200 to-indigo-700">about</a>
          </Link>
          <Link href="/projects">
            <a className="transition-all ease-in bg-clip-text hover:text-transparent bg-gradient-to-b from-zima-200 to-indigo-700">projects</a>
          </Link>
          <Link href="/blog">
            <a className="transition-all ease-in bg-clip-text hover:text-transparent bg-gradient-to-b from-zima-200 to-indigo-700">blog</a>
          </Link>
        </div>
        {/* <div ref={ref} className="hidden z-0"></div> */}
      </div>
    </>
  );
}
