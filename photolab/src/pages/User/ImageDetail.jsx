import DisplayImage from "../../components/Detail/DisplayImage";
import Header from "../../components/default/Header";
import Heart from "../../components/default/Heart";
import { useSelector } from "react-redux";

const ImageDetail = () => {
  const imageDetailData = useSelector((state) => state.imageDetail);
  const likeState = imageDetailData.likeState
  return(
    <div className=" w-[1440px]">
      <Header/>
      <div className=" mt-[110px] flex flex-col justify-center items-center">
        <div className="text-[20px] leading-6 font-bold font-['Inter']">{imageDetailData.title}</div>
        <hr className=" border border-['#000000] w-44 h-0 my-2"></hr>
        <div className="text-[15px] font-semibold font-['Inter']">{imageDetailData.photographer}</div>
        <DisplayImage imageDetailData={imageDetailData}/>
        <div className=" flex mt-[50px] justify-between w-[944px]">
          <div className=" font-normal font-['Inter'] leading-tight text-xs w-[624px]">{imageDetailData.description}</div>
          <div className="flex flex-col items-center">
            <Heart likeState={likeState}/>
            <div className=" text-[10px] font-normal font-['Inter'] pt-[15px] text-grey">좋아요 {imageDetailData.likeCount}개</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ImageDetail;