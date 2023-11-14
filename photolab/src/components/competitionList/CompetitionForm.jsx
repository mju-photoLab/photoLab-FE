import { useNavigate } from "react-router-dom";

const CompetitionForm = (props) => {
  const navigate = useNavigate();
  const compeListDto = props.compeListDto
  return(
    <div className="mx-[240px]">
      <div className=" px-6 my-2 w-[944px] h-[60px] border-1 border-[#DFDFDF] border-solid flex justify-between items-center rounded-[10px] ">
        <div className=" mx-6 flex ">
          <div className=" text-[#000000] text-lg font-medium font-['Inter'] mr-[26px]">{compeListDto.competition_id}</div>
          <div className=" text-[#000000] text-lg font-bold font-['Inter'] cursor-pointer" onClick={() => {navigate('/CompetitionVote')}}>{compeListDto.title}</div>
        </div>
        <div className=" text-[#000000] text-[15px] font-medium font-['Inter']">{compeListDto.createdAt}</div>
      </div>
    </div>
    
  )
}
export default CompetitionForm;