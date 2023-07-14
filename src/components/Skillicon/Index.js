import "./Index.scss"

const SkillIcon = ({ item, size }) => {
  return (
    <div
      className="mx-4 my-10 lg:my-4 icon"
      style={{ color: item.color, cursor: "default" }}
    >
      <div className="h-2">
        <span id="item-name" className={`absoulte bottom-0 left-0 bg-[#69455b] z-[99999] text-[#ffff00]`}>
          {item.name}
        </span>
      </div>
      <div className="text-8xl md:text-7xl lg:text-5xl">
        {item.icon}
      </div>
    </div>
  )
}
export default SkillIcon
