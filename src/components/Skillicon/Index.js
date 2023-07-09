import "./Index.scss"
import { IconContext } from "react-icons"

const SkillIcon = ({ item, size }) => {

  if (size === undefined) {
    if (window.innerWidth > 768) size = "50"
    if (window.innerWidth <= 768) size = "60"
  }

  return (
    <IconContext.Provider value={{ size: size }}>
      <div
        className="mx-4 my-10 lg:my-4 icon"
        style={{ color: item.color, cursor: "default" }}
      >
        <div className="h-2">
          <span id="item-name" className={`absoulte bottom-0 left-0 bg-[#69455b] z-[99999] text-[#ffff00]`}>
            {item.name}
          </span>
        </div>
        {item.icon}
      </div>
    </IconContext.Provider>
  )
}
export default SkillIcon
