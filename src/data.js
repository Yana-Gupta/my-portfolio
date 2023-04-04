import IIITM1 from "./assets/images/IIITM1.png"
import REALESTATE from "./assets/images/REAL-ESTATE.png"
import PORTFOLIO from "./assets/images/PORTFOLIO.png"
import {
  SiJavascript,
  SiCss3,
  SiHeroku,
  SiHtml5,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiC,
  SiTailwindcss,
  SiAngular,
  SiSass,
  SiGit,
  SiGithub,
  SiLinux,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiNetlify,
  SiFirebase,
  SiCplusplus,
} from "react-icons/si"
import { SiLinkedin } from "react-icons/si"

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
  {
    name: "olive",
    color: "#2C3A34",
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

const language = [
  {
    name: "JavaScript",
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages.",
    icon: <SiJavascript />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    icon: <SiTypescript />,
    color: "#007acc",
  },
  {
    name: "HTML",
    description: "HTML is the standard markup language for creating Web pages.",
    icon: <SiHtml5 />,
    color: "#E34F26",
  },
  {
    name: "CSS",
    description:
      "CSS is a language that describes the style of an HTML document.",
    icon: <SiCss3 />,
    color: "#1572B6",
  },
  {
    name: "React",
    description: "React is a JavaScript library for building user interfaces.",
    icon: <SiReact />,
    color: "#61DAFB",
  },
  {
    name: "NextJS",
    description:
      "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
    icon: <SiNextdotjs />,
    color: "#ff0000",
  },
  {
    name: "Angular",
    description:
      "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
    icon: <SiAngular />,
    color: "#003366",
  },
  {
    name: "SASS",
    description:
      "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
    icon: <SiSass />,
    color: "#CC6699",
  },
  {
    name: "TailwindCSS",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    icon: <SiTailwindcss />,
    color: "#38b2ac",
  },
  {
    name: "MongoDB",
    description:
      "MongoDB is a cross-platform document-oriented database program.",
    icon: <SiMongodb />,
    color: "#589636",
  },
  {
    name: "PostgreSQL",
    description:
      "PostgreSQL is a powerful, open source object-relational database system.",
    icon: <SiPostgresql />,
    color: "#ffff00",
  },
  {
    name: "SiFirebase",
    description:
      "Firebase is a platform developed by Google for creating mobile and web applications.",
    icon: <SiFirebase />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    description:
      "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    icon: <SiGit />,
    color: "#F05032",
  },
  {
    name: "GitHub",
    description:
      "GitHub is a web-based hosting service for version control using Git.",
    icon: <SiGithub />,
    color: "#171515",
  },
  {
    name: "NodeJS",
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    icon: <SiNodedotjs />,
    color: "#339933",
  },
  {
    name: "Linux",
    description:
      "Linux is a family of open source Unix-like operating systems based on the Linux kernel.",
    icon: <SiLinux />,
    color: "#FCC624",
  },
  {
    name: "Jest",
    description:
      "Jest is a delightful JavaScript Testing Framework with a focus on simplicity.",
    icon: <SiJest />,
    color: "#C21325",
  },
  {
    name: "HeroKu",
    description:
      "Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.",
    icon: <SiHeroku />,
    color: "#430098",
  },
  {
    name: "Netlify",
    description:
      "Netlify is a cloud computing company that offers hosting and serverless backend services for static websites.",
    icon: <SiNetlify />,
    color: "#00C7B7",
  },
  {
    name: "C",
    description:
      "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
    icon: <SiC />,
    color: "#0000ff",
  },
  {
    name: "C++",
    describe:
      "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'.",
    icon: <SiCplusplus />,
    color: "#044F88",
  },
]

const social = [
  {
    name: "LinkedIn",
    icon: <SiLinkedin />,
    url: "https://www.linkedin.com/in/Yana-Gupta/",
    color: "#0072b1",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    url: "https://github.com/Yana-Gupta",
    color: "#171515",
  },
]

export { themeClass, project, language, social }
