import Navbar from "../Navbar/Index";
import Footer from "../Footer/Index";
import { useState } from "react";
import "./Index.scss";
import data from "../../data.json";
const themeClass = data.themeClass;

const Layout = ({ children }) => {
  const [bgclass, setBgclass] = useState(themeClass[0]);
  return (
    <div className={`text-white overflow-x-hidden ${bgclass.name}`}>
      <Navbar />
      <div className="color-palette flex flex-col">
        {themeClass.map((color, index) => {
          return (
            <button
              key={index}
              className={`${color.name} h-12 w-12 border-2 border-gery-800 my-4 rounded-full`}
              onClick={() => {
                setBgclass(color);
              }}
            />
          );
        })}
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
