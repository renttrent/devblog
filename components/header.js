import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="font-mono font-extrabold text-gray-900 mx-auto text-center p-4 text-lg">
        rei(site);
      </div>
      <div className="bg-gray-100 p-3">
        <div className="flex flex-row justify-between w-8/12 md:w-1/2 lg:w-1/3 mx-auto text-center font-semibold">
          <Link href="/">
            <a>home</a>
          </Link>
          <a href="">about</a>
          <Link href="/blog">
            <a>blog</a>
          </Link>
          <a href="">projects</a>
        </div>
      </div>
    </>
  );
}
