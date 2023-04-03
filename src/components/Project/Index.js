import React from "react"
import { project } from "../../data"

const Project = () => {
  return (
    <div className="px-20">
      <h1 className="text-2xl font-semibold mx-auto">My Projects</h1>
      {project.map((project, index) => {
        return (
          <div
            className={`flex ${
              index % 2 ? "flex-row" : "flex-row-reverse"
            }  pl-12 py-8`}
          >
            <div className="w-1/2">
              <h1 className="text-2xl">{project.name}</h1>
              <p>{project.description}</p>
            </div>
            <img className="w-1/2" src={project.image} />
          </div>
        )
      })}
    </div>
  )
}

export default Project
