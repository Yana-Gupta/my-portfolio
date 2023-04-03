import { NavLink } from "react-router-dom";
import "./Index.scss";

const Navbar = () => {
  return (
    <nav className="flex h-28 items-center justify-between bg-grey-700">
      <h1 className="text-3xl font-bold px-20">Yana Gupta</h1>
      <div className="px-20">
        <NavLink to="/" className="px-8 font-normal text-xl" activeclassname="active">
          Home
        </NavLink>
        <NavLink
          to="/project"
          className="px-8 font-normal text-xl"
          activeclassname="active"
        >
          Projects
        </NavLink>
      </div>
      <NavLink className="blob-btn" to="contact">
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
  );
};

export default Navbar;
