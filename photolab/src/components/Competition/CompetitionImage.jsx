import { useNavigate } from "react-router-dom";

const CompetitionImage = ({competitionDetail}) => {
  const competitionTitle = competitionDetail.title
  const competitionContent = competitionDetail.content
  return(
    <div className=" w-[944px] h-[150px] bg-stone rounded-[20px] mt-[50px]">
      <div className=" py-[33px] pl-[56px] flex flex-col justify-between">
        <div className=" text-3xl font-extrabold font-['Pretendard'] text-muteBg">{competitionTitle}</div>
        <div className=" text-muteBg text-xl font-extrabold font-['Pretendard'] pt-6">{competitionContent}</div>
      </div>
    </div>
  )
}

export default CompetitionImage;