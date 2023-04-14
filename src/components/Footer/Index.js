import { social } from "../../data"
import "./Index.scss"

const Footer = () => {
  return (
    <footer className="py-4 text-center min-h-[100px] flex flex-row align-center justify-around items-center mt-24 bg-[#04264E]">
      <h1 className="text-2xl font-semibold py-3 uppercase tracking-wide">
        Socials 🌐
      </h1>
      <div className="flex flex-row items-center justify-center">
        {social.map((item, index) => {
          return (
            <a
              href={item.url}
              id={`social-${index + 1}`}
              target="blank"
              key={index}
              className={`mx-3 my-2 rounded-md border-1 hover:border-gray-200`}
            >
              <button
                className={`text-[20px] flex text-center items-center jusity-center px-4 py-2`}
              >
                <span>{item.icon}</span>
              </button>
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
