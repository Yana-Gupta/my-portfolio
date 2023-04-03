import IIITM1 from "./assets/images/IIITM1.png"
import REALESTATE from "./assets/images/REAL-ESTATE.png"
import PORTFOLIO from "./assets/images/PORTFOLIO.png"

const themeClass = [
  {
    name: "blue",
    color: "#04052E",
  },
  {
    name: "purple",
    color: "#380525",
  },
  {
    name: "melon",
    color: "#F73BC5",
  },
]

const project = [
  {
    name: "MBA Department Website",
    description:
      "This is a website for MBA department of a university. The website is made using ReactJS and TailwindCSS.",
    image: IIITM1,
    live: "https://mba-iiitm.vercel.app/",
  },
  {
    name: "Real Estate Frontend Website",
    description:
      "This is a website for Real Estate. The website is made using ReactJS, material UI and SASS.",
    image: REALESTATE,
    live: "https://real-estate-frontend-lemon.vercel.app/",
    code: "https://github.com/Yana-Gupta/real-estate-frontend",
  },
  {
    name: "Portfolio Website",
    description:
      "This is a portfolio website. The website is made using ReactJS and SASS.",
    image: PORTFOLIO,
    live: "https://velvety-travesseiro-d69516.netlify.app/",
    code: "https://github.com/Yana-Gupta/portfolio",
  },
]

export { themeClass, project }
