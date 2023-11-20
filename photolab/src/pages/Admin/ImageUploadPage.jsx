import CompetitionLogo from "../../components/admin/Competition_admin/CompetitionLogo";
import ImageUpload from "../../components/admin/Competition_admin/ImageUpload"
import AdminHeader from "../../components/default/AdminHeader";
import { useState } from "react";

const ImageUploadPage = () => {
  const [competitiontitle, setCompetitiontitle] = useState('');
  const [competitioncontent, setCompetitioncontent] = useState();
  const [awards, setAwards] = useState(0);
  console.log(competitiontitle);
  console.log(competitioncontent);
  console.log(awards);
  return(
    <div className=" w-[1440px] h-full">
      <AdminHeader/>
      <div className=" mx-[248.5px] mt-[110px] flex flex-col items-center justify-center">
        <div className=" flex justify-center items-center flex-col mb-14">
          <div className="text-[20px] leading-6 font-bold font-['Inter']">공모전 등록하기</div>
          <hr className=" border border-['#000000] w-[304px] h-0 my-2"></hr>
        </div>
        <div className="flex justify-between w-full mb-6 items-center">
          <input onChange={(e)=> {setAwards(e.target.value)}} placeholder="수상작개수" className="bg-none w-[130px] h-[40px] border-1 border-mainBlack flex justify-start items-center pl-[15px]">
            
          </input>
        </div>
        <CompetitionLogo setCompetitiontitle={setCompetitiontitle} setCompetitioncontent={setCompetitioncontent}/>
        <ImageUpload competitiontitle={competitiontitle} competitioncontent={competitioncontent} awards={awards}/>
      </div>
      
    </div>
  )
}

export default ImageUploadPage;
