import { useNavigate } from "react-router-dom";

const ListForm = (props) => {
  const navigate = useNavigate();
  const listObj = props.listObj;
  const engName = props.engName;
  const callId = listObj[engName+'_id'];

  return(
    <div className="mx-[240px]">
      <div className=" px-6 my-2 w-[944px] h-[60px] border-1 border-[#DFDFDF] border-solid flex justify-between items-center rounded-[10px] ">
        <div className=" mx-6 flex ">
          <div className=" text-[#000000] text-lg font-medium font-['Inter'] mr-[26px]">{callId}</div>
          <div className=" text-[#000000] text-lg font-bold font-['Inter'] cursor-pointer" onClick={() => {navigate('/CompetitionVote')}}>{listObj.title}</div>
        </div>
        <div className=" flex">
          <div className=" text-mainBlack text-[15px] font-medium font-['Inter'] cursor-pointer mr-2">수정</div>
          <div className=" text-mainBlack text-[15px] font-medium font-['Inter'] cursor-pointer">삭제</div>
        </div>
      </div>
    </div>
    
  )
}
export default ListForm;