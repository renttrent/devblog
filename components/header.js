import Link from "next/link";
import Typical from "react-typical"

export default function Header() {
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
      <div className="bg-zima-200 text-white p-3">
        <div className="flex flex-row justify-between w-8/12 md:w-3/4 xl:1/3 lg:w-1/2 mx-auto text-center font-mono font-semibold">
          <Link href="/">
            <a>home</a>
          </Link>
          <a href="/about">about</a>
          <Link href="/blog">
            <a>blog</a>
          </Link>
          <a href="/projects">projects</a>
        </div>
      </div>
    </>
  );
}
