import { useState } from "react";
import CompetitionLogo from "../../../components/admin/Competition_admin/CompetitionLogo";
import ImageUpload from "../../../components/admin/Competition_admin/ImageUpload"
import AdminHeader from "../../../components/default/AdminHeader";


const ExhibitionImageUploadPage = () => {
  const [exhibitiontitle, setExhibitiontitle] = useState('');
  const [exhibitioncontent, setExhibitioncontent] = useState('');
  return(
    <div className=" w-[1440px] h-full">
      <AdminHeader/>
      <div className=" mx-[248.5px] mt-[110px] flex flex-col items-center justify-center">
        <div className=" flex justify-center items-center flex-col mb-14">
          <div className="text-[20px] leading-6 font-bold font-['Inter']">전시 등록하기</div>
          <hr className=" border border-['#000000] w-[304px] h-0 my-2"></hr>
        </div>
        <div className=" flex mt-[50px] w-[944px] justify-between">
          <div className=" flex flex-col">
            <textarea onChange={(e) => {setExhibitiontitle(e.target.value)}} placeholder="제목을 입력해주세요" rows={2} className=" overflow-hidden resize-none w-[221px] placeholder:text-grey flex flex-wrap text-mainBlack text-[40px] font-bold font-['Inter'] placeholder:font-bold"/>
            <textarea onChange={(e) => {setExhibitioncontent(e.target.value)}} placeholder="내용을 입력해주세요" rows={5} className=" mt-[40px] overflow-hidden resize-none w-[221px] placeholder:text-grey flex flex-wrap text-mainBlack text-[15px] font-normal font-['Inter'] placeholder:font-bold "/>
          </div>
          <ImageUpload exhibitiontitle={exhibitiontitle} exhibitioncontent={exhibitioncontent}/>
        </div>
      </div>
      
    </div>
  )
}

export default ExhibitionImageUploadPage;
