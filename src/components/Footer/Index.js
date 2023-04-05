import { social } from "../../data"
import "./Index.scss"

const Footer = () => {
  return (
    <footer className="py-4 text-center">
      <h1 className="text-3xl font-semibold py-3">Connect With Me</h1>
      <div className="flex flex-row items-center justify-center my-2">
        {social.map((item, index) => {
          return (
            <a
              href={item.url}
              id={`social-${index + 1}`}
              target="blank"
              key={index}
              className={`mx-3 my-2 rounded-md border-1 hover:rounded-full hover:border-1 hover:border-gray-200`}
            >
              <button className={`text-[20px] flex text-center items-center jusity-center px-2 py-1`}>
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
