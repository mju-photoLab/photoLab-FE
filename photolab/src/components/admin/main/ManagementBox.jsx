import { useNavigate } from "react-router-dom";

const ManagementBox = (props) => {
  const name = props.name;
  const content = props.content;
  const url = props.url;
  const listData = props.listData;
  const engName = props.engName
  const navigate = useNavigate();
  return(
    <div className=" w-[624px] h-[140px] rounded-[10px] border-1 border-mainBlack bg-realWH my-[10px] px-[24px]">
      <div className=" text-mainBlack text-3xl font-semibold font-['Pretendard'] pt-[24px]">{name}하기</div>
      <div className="text-black text-[15px] font-normal font-['Pretendard'] pt-[17px]" >{content}</div>
      <div onClick={() => {navigate(`/admin/${url}`, {state: {'list': listData, 'name':name, 'engName':engName }})}} className=" cursor-pointer flex justify-end items-end text-mainBlack text-[15px] font-normal font-['Pretendard']">바로가기 &gt;</div>
    </div>
  )
}

export default ManagementBox;