import { useNavigate } from "react-router-dom";

const ManagementBoxLong = (props) => {
  const name = props.name;
  const content = props.content;
  const url = props.url;
  const listData = props.listData;
  const navigate = useNavigate();

  return(
    <div className=" w-[304px] h-[300px] bg-realWH rounded-[10px] border-1 border-mainBlack my-[10px]  pl-[30px] py-[24px] pr-[24px]">
      <div className=" flex flex-col justify-between items-end h-[252px] w-[250px]">
        <div className=" h-[89px] flex justify-between items-start flex-col">
          <div className=" text-mainBlack text-3xl font-semibold font-['Pretendard'] ">{name}하기</div>
          <div className=" text-mainBlack text-[15px] font-normal font-['Pretendard']">{content}</div>
        </div>
        <div onClick={() => {navigate(`/admin/${url}`, {state: {'list': listData, 'name':name }})}} className="flex cursor-pointer justify-end text-mainBlack text-[15px] font-normal font-['Pretendard']">바로가기 &gt;</div>

      </div>
    </div>
  )
}

export default ManagementBoxLong;