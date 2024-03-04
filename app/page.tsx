'use client'; 
import Banner from "@/components/Banner";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/NavBar";
import RightSide from "@/components/RightSide";
import { motion } from "framer-motion";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="w-full h-screen font-micro5 bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 ">
      <Navbar/>
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} className="hidden xl:inline-flex w-20 h-full fixed left-0 bottom-0"><LeftSide/></motion.div>
        <div className="h-[88vh] w-full mx-auto px-20 "><Banner/><About />
            <Experience />
            <Projects />
            <Contact />
            <Footer /></div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}} className="hidden xl:inline-flex w-24 h-full fixed right-0 bottom-0"><RightSide /></motion.div>
      </div>
    </main>     
  );
}
