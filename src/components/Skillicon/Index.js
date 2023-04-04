import "./Index.scss"
import { IconContext } from "react-icons"
import { useState } from "react"

const SkillIcon = ({ item }) => {
  const [show, setShow] = useState(false)
  return (
    <IconContext.Provider value={{ size: "40" }}>
      <button
        className="my-5 icon"
        style={{ color: item.color, cursor: "default" }}
      >
        <div className="h-2">
          <span id="item-name" className={`absoulte bottom-0 left-0 bg-[#351C2B] z-[99999]`}>
            {item.name}
          </span>
        </div>
        {item.icon}
      </button>
    </IconContext.Provider>
  )
}
export default SkillIcon
