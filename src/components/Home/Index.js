import React, { useState } from "react"
import Image from "../../assets/images/graphic.png"
import "./Index.scss"
import myResume from "../../assets/documents/Yana's Resume.pdf"
import { language } from "../../data"
import SkillIcon from "../Skillicon/Index"

const Home = () => {
  const [btnText, setBtnText] = useState("Download Resume")
  const [download, setDownload] = useState(false)

  return (
    <div className="px-8 lg:pl-20">
      <div className="flex flex-col mt-0 lg:justify-center lg:content-center lg:items-center lg:flex-row-reverse lg:mt-2 min-h-[85vh]">
        <div className="mx-auto">
          <img
            src={Image}
            alt=""
            className="rounded-full graphic sm:p-2 md:p-5 lg:p-10"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <span>Hi👋</span>
          <h1 className="text-8xl sm:text-9xl font-semibold">I'm Yana</h1>
          <p className="text-6xl font-light py-3 lg:text-3xl lg:py-0">
            I am a Full Stack Developer. I am currently doing my B.tech in
            Information Techology at IIITM Gwalior.
          </p>
          <a
            download="Yana's Resume"
            href={myResume}
            className={`animated-button my-5 ${
              download ? `sm:text-6xl lg:text-2xl` : `lg:text-3xl  sm:text-6xl`
            } sm:w-full  lg:w-fit `}
            onClick={() => {
              setBtnText("Thanks for downloading!")
              setDownload(true)
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {btnText}
          </a>
        </div>
      </div>
      <div id="techstack" className="">
        <h1 className="text-6xl font-semibold py-2 my-2">TechStacks 👩‍💻</h1>
        <div className="grid gap-4 mobile:grid-cols-4  laptop:grid-cols-8 desktop:grid-cols-9 px-6 xl:grid-cols-9 gap-4 px-8">
          {language.map((item, index) => {
            return <SkillIcon key={index} item={item} size={50} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
