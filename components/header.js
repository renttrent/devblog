import Link from "next/link";
import { motion } from "framer-motion"
import React from "react"
import { MemoizedAnimation } from "./animation";


// console.log(Animation)
// console.log(Animation.type.setDisplayName("Animation"))

export default function Header() {
  
  return (
    <>
      <div className="font-mono font-extrabold text-gray-900 mx-auto text-center p-4 text-lg">
        <MemoizedAnimation />
      </div>
    
      <motion.div className="bg-zima-200 text-white p-3 ">
        
        <div className="z-20 flex flex-row justify-between w-11/12 md:max-w-screen-lg mx-auto text-center text-lg font-mono font-semibold">
          <Link href="/" passHref>
            <motion.a whileHover={{ scale: 1.1 }} className="transition-all ease-in cursor-pointer hover:text-indigo-400 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-4">home</motion.a>
          </Link>
          <Link href="/about" passHref>
            <motion.a whileHover={{ scale: 1.1 }} className="transition-all ease-in cursor-pointer hover:text-indigo-400 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-4 ">about</motion.a>
          </Link>
          <Link href="/projects" passHref>
            <motion.a whileHover={{ scale: 1.1 }} className="transition-all ease-in cursor-pointer hover:text-indigo-400 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-4 ">projects</motion.a>
          </Link>
          <Link href="/blog" passHref>
            <motion.a whileHover={{ scale: 1.1 }} className="transition-all ease-in cursor-pointer hover:text-indigo-400 outline-none focus-visible:outline-indigo-400 focus-visible:outline-offset-4 ">blog</motion.a>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
