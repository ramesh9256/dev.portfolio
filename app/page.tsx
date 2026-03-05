// import Image from "next/image";

import About from "@/components/section/About";
import Experience from "@/components/section/Experience";
import Hero from "@/components/section/Hero";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skill";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
    </>
  );
}
