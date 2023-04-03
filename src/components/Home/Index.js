import React from "react";
import Image from "../../assets/images/graphic.png";
import "./Index.scss";

const Home = () => {
  return (
    <div className="pl-24 my-8">
      <div className="flex flex-row align-center min-h-[90vh]">
        <div className="w-1/2 my-auto">
          <span>Hi👋</span>
          <h1 className="text-6xl font-semibold py-2">I'm Yana</h1>
          <p className="text-3xl font-light py-2">
            I am a Full Stack Developer. I am currently doing my B.tech in
            Information Techology at IIITM Gwalior.
          </p>
          <a href="#" className="animated-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Download Resume
          </a>
        </div>
        <img
          src={Image}
          alt=""
          className="rounded-full graphic mx-auto w-1/2"
        />
      </div>
      <div id="techstack" className="">
        <h1 className="text-6xl font-semibold py-2">TechStacks 👩‍💻</h1>
      </div>
    </div>
  );
};

export default Home;
