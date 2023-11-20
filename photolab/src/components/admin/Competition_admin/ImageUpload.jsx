import React, { useRef } from "react";
import saveFileImage from "../../../hooks/api/admin/SaveFileImage";
import { useNavigate } from "react-router-dom";

const ImageUpload = (props) => {
  const competitiontitle = props.competitiontitle;
  const competitioncontent = props.competitioncontent;
  const awardCount = props.awards;
  const imageInput = useRef();
  const navigate = useNavigate();

  const handleImageUpload = async () => {
    try {
      const response = await saveFileImage({
        imageInput: imageInput.current,
        competitiontitle,
        competitioncontent,
        awardCount,
      });
      console.log(response);
    } catch (error) {
      console.log(error)
      navigate('/admin/exhibition/detailUpload')
    }
  };

  return (
    <div className=" flex justify-center flex-col items-center">
      <label htmlFor="imageInput" className="w-[520px] h-[320px] bg-[#D9D9D9] rounded-[20px] flex justify-center items-center mb-[50px]">
        <input id="imageInput" className="hidden" type="file" ref={imageInput} multiple />
        <div className="font-['Pretendard'] font-bold text-[20px]">이미지 한 번에 추가하기</div>
      </label>
      <div className=" w-[161px] h-[50px] px-[37px] py-[13px] rounded-[25px] border-1 border-mainBlack flex justify-center items-center flex-nowrap">
        <button onClick={handleImageUpload} className=" text-mainBlack text-xl font-medium font-['Pretendard']">추가하기</button>
      </div>
    </div>
  );
};

export default ImageUpload;