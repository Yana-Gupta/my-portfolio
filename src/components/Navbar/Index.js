import { NavLink } from "react-router-dom"
import "./Index.scss"

const Navbar = () => {
  return (
    <nav className="flex h-[15vh] items-center justify-between bg-grey-700">
      <h1 className="text-4xl font-bold px-6 lg:px-20 uppercase lg:text-3xl">
        Portfolio
      </h1>
      <div className="px-20 flex flex-col lg:flex-row">
        <NavLink
          to="/"
          className="px-8 font-normal text-2xl lg:text-xl py-2"
          activeclassname="active"
        >
          Home
        </NavLink>
        <NavLink
          to="/project"
          className="px-8 font-normal text-2xl lg:text-xl py-2"
          activeclassname="active"
        >
          Projects
        </NavLink>
      </div>
      <NavLink
        className="blob-btn text-3xl right-20 lg:right-10 lg:text-xl"
        to="contact"
      >
        Let's Talk
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </NavLink>

      {/* <button className="bg-blue-700 mx-20 px-4 py-2 rounded-full	text-white border-2 border-blue-800">
        Let's talk
      </button> */}
    </nav>
  )
}

export default Navbar
