import { useState } from "react";

const CompetitionImage = (props) => {
  const photoInfo = props.photoInfo
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  }
  const handleMouseOut = () => {
    setIsHovering(false);
  }
  return(
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className=" relative">
      <img src={photoInfo.imagePath} alt="testImage" className="w-80 h-60 rounded-[20px] ml-[24px] my-[6px] cursor-pointer object-cover "/>
      <div className={isHovering ? " my-[6px] visible absolute bg-[#000000] bg-opacity-70 flex flex-col justify-center items-center w-80 h-60 top-0 rounded-[20px] right-0 z-10 cursor-pointer" : 'absolute hidden'}>
        <div className=" font-[Pretendard] text-center font-bold text-xl text-realWH my-[8px]">{photoInfo.title}</div>
        <div className="font-[Pretendard] text-center font-bold text-[15px] text-realWH my-[8px]">{photoInfo.description}</div>
      </div>
    </div>
  )
}

export default CompetitionImage;