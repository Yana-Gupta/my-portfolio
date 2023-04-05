import React from "react"
import { project } from "../../data"
import "./Index.scss"
import { Link } from "react-router-dom"
import SkillIcon from "../Skillicon/Index"

const Project = () => {
  return (
    <div className="px-20 my-8">
      <h1 className="text-4xl font-semibold mx-auto text-center">
        My Projects
      </h1>
      {project.map((project, index) => {
        if (index % 2 === 0) {
          return (
            <div
              key={index}
              className={`flex flex-col-reverse my-12 lg:flex-row-reverse px-4 lg:px-12 py-8`}
            >
              <div className="w-full lg:w-1/2 mx-4">
                <h1 className="text-2xl hidden lg:block font-semibold py-4 text-center">
                  {project.name}
                </h1>
                <p className="py-4 text-center">{project.description}</p>
                <div className="mx-auto text-center">
                  {project.live && (
                    <Link
                      to={project.live}
                      className="glow-on-hover1 mx-2 font-semibold"
                      type="button"
                    >
                      View Live
                    </Link>
                  )}
                  {project.code && (
                    <Link
                      to={project.code}
                      className="glow-on-hover2 mx-2 font-semibold"
                      type="button"
                    >
                      View Code
                    </Link>
                  )}
                </div>
                <div
                  id="techstack"
                  className="flex flex-col align-center justify-center"
                >
                  <h1 className="text-xl font-normal pt-4 text-center">
                    TechStacks used:
                  </h1>
                  <div className="grid grid-cols-6 align-center text-center">
                    {project.techstack.map((tech, index) => {
                      return <SkillIcon item={tech} key={index} />
                    })}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <h1 className="block lg:hidden font-semibold py-9 text-4xl">
                  {project.name}
                </h1>
                <img className="rounded-md" src={project.image} alt="" />
              </div>
            </div>
          )
        }

        return (
          <div
            key={index}
            className={`flex flex-col-reverse my-10 lg:flex-row px-4 lg:px-12 py-8 text-center`}
          >
            <div className="w-full lg:w-1/2 mx-10">
              <h1 className="text-2xl hidden lg:block font-semibold py-4">
                {project.name}
              </h1>
              <p className="py-4">{project.description}</p>
              <div className="mx-auto">
                {project.live && (
                  <Link
                    to={project.live}
                    className="glow-on-hover1 mx-2 font-semibold"
                    type="button"
                  >
                    View Live
                  </Link>
                )}
                {project.code && (
                  <Link
                    to={project.code}
                    className="glow-on-hover2 mx-2 font-semibold"
                    type="button"
                  >
                    View Code
                  </Link>
                )}
                <div
                  id="techstack"
                  className="flex flex-col align-center justify-center"
                >
                  <h1 className="text-xl font-normal pt-4">TechStacks used: </h1>
                  <div className="grid grid-cols-6 gap-3 place-content-center">
                    {project.techstack.map((tech, index) => {
                      return <SkillIcon key={index} item={tech} />
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <h1 className="block lg:hidden font-semibold py-9 text-4xl">
                {project.name}
              </h1>
              <img className="rounded-md" src={project.image} alt="" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Project
