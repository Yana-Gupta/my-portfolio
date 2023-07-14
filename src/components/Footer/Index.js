import { social } from "../../data"
import "./Index.scss"

const Footer = () => {
  return (
    <footer className="py-8 mt-24 text-center flex flex-row items-center min-h-[10vh] mx-8 lg:mx-20">
      <h1 className="font-semibold text-7xl lg:ml-0 flex-1 text-start whitespace-nowrap"> Connect With Me 📫</h1>

      <div className="flex flex-col lg:flex-row items-end justify-end grow">
        {social.map((item, index) => {
          return (
            <a
              href={item.url}
              target="blank"
              key={index}
              className={`social my-2 mx-5 rounded-full hover:border-gray-200 cursor-pointer text-center items-center jusity-center `}
            >
              <div
                className="rounded-full flex justify-center items-center">
                <span
                  style={{ color: item.color, backgroundColor: "rgb(223, 163, 52)" }}

                  className="rounded-full text-[24px] p-3 border-[1px] border-[#ffffff]" id={`social-${index + 1}`}>
                  {item.icon}
                </span>
                <p className="rounded-ful whitespace-nowrap text-center px-2 text-stone-900 relative mx-2">{item.username}</p>
              </div>
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
