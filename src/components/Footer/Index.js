import { social } from "../../data"
import "./Index.scss"

const Footer = () => {
  return (
    <footer className="py-4 text-center min-h-[20vh]">
      <h1 className="text-2xl font-semibold py-3 uppercase tracking-wide">
        Connect With Me
      </h1>
      <div className="flex flex-row justify-center mt-8">
        {social.map((item, index) => {
          return (
            <a
              href={item.url}
              id={`social-${index + 1}`}
              target="blank"
              key={index}
              className={`mx-3 my-2 rounded-md border-1 hover:rounded-full hover:border-1 hover:border-gray-200`}
            >
              <button
                className={`text-[20px] flex text-center items-center jusity-center px-4 py-2`}
              >
                <span>{item.icon}</span>
                <span className="">&nbsp;{item.username}</span>
              </button>
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
