import Link from "next/link";
import Typical from "react-typical"
import { motion } from "framer-motion"
import React from "react"

const Animation = React.memo(() => {
  return (<Typical
        steps={
          [
            'Hey there!', 1000,
            'rei(thedev);', 1000,
          ]
        }
      >
      </Typical>);
})

export default function Header() {
  
  return (
    <>
      <div className="font-mono font-extrabold text-gray-900 mx-auto text-center p-4 text-lg">
        <Animation />
      </div>
    
      <motion.div className="bg-zima-200 text-white p-3 ">
        
        <div className="z-20 flex flex-row justify-between w-11/12 md:max-w-screen-lg mx-auto text-center text-lg font-mono font-semibold">
          <Link href="/">
            <motion.a whileHover={{ scale: 1.1 }} className="transition-all ease-in cursor-pointer hover:text-indigo-400 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-4">home</motion.a>
          </Link>
          <Link href="/about">
            <motion.a whileHover={{ scale: 1.1 }} className="transition-all ease-in cursor-pointer hover:text-indigo-400 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-4 ">about</motion.a>
          </Link>
          <Link href="/projects">
            <motion.a whileHover={{ scale: 1.1 }} className="transition-all ease-in cursor-pointer hover:text-indigo-400 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-4 ">projects</motion.a>
          </Link>
          <Link href="/blog">
            <motion.a whileHover={{ scale: 1.1 }} className="transition-all ease-in cursor-pointer hover:text-indigo-400 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-4 ">blog</motion.a>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
