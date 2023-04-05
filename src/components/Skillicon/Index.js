import "./Index.scss"
import { IconContext } from "react-icons"

const SkillIcon = ({ item, size }) => {
  if(size === undefined) size = "40"
  return (
    <IconContext.Provider value={{ size: size }}>
      <button
        className="m-4 icon"
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
