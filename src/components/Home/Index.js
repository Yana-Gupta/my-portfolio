import React from "react"
import Image from "../../assets/images/graphic.png"
import "./Index.scss"
import { language } from "../../data"
import SkillIcon from "../Skillicon/Index"

const Home = () => {
  return (
    <div className="px-8 my-4 lg:pl-20 my-8">
      <div className="flex mt-4 flex-col min-h-[85vh] lg:flex-row-reverse lg:mt-20">
        <div className="mx-auto lg:h-full">
          <img src={Image} alt="" className="h-96 w-96 rounded-full graphic" />
        </div>
        <div className="items-center w-full lg:w-1/2 lg:h-full">
          <span>Hi👋</span>
          <h1 className="text-6xl font-semibold py-2">I'm Yana</h1>
          <p className="text-3xl font-light py-2">
            I am a Full Stack Developer. I am currently doing my B.tech in
            Information Techology at IIITM Gwalior.
          </p>
          <a href="/" className="animated-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Download Resume
          </a>
        </div>
      </div>
      <div id="techstack" className="">
        <h1 className="text-6xl font-semibold py-2 my-2">TechStacks 👩‍💻</h1>
        <div className="grid grid-cols-4 px-2 md:grid-cols-6 px-4 lg:grid-cols-8 px-6 xl:grid-cols-9 px-8">
          {language.map((item, index) => {
            return <SkillIcon key={index} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
