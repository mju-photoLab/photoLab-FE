const DisplayImage = ({imageDetailData}) => {
  const imagePath = imageDetailData.imagePath
  return(
    <div className=" bg-muteBg h-[550px] w-[944px] mt-[50px] flex justify-center items-start ">
      <img src={imagePath} className=" object-contain object-center bg-cover h-full w-full"/>
    </div>
  )
}

export default DisplayImage;