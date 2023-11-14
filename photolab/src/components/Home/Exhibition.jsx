const Exhibition = ({homeData}) => {
  const exhibitPhoto = homeData.photos

  return(
    <div className=" flex justify-center w-[1440px]">
      <div className=" w-[960px] my-[50px] flex flex-col">
        <div className=" mx-[8px] mb-[12px] text-mainBlack text-2xl font-extrabold font-['Pretendard'] cursor-default">포토랩 전시회</div>
        <div className="flex my-[12px]">
          {
            exhibitPhoto.map((a,index) => {
              console.log(exhibitPhoto)
              return(
                <img src={exhibitPhoto[index].imagePath} alt="test" className=" w-56 h-56 mx-[8px] object-cover cursor-pointer"/> 
              )
            }) 
          }
        </div>
        <div className=" mx-[8px] flex justify-end mt-[12px] text-grey text-[15px] font-extrabold font-['Pretendard'] cursor-pointer">+ 더보기</div>
      </div>
    </div>
  )
}

export default Exhibition;