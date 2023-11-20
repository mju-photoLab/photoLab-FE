import { useNavigate } from "react-router-dom";

const UserListForm = (props) => {
  const navigate = useNavigate();
  const listObj = props.listObj;

  return(
    <div className="mx-[240px]">
      <div className=" px-6 my-2 w-[944px] h-[60px] border-1 border-[#DFDFDF] border-solid flex justify-between items-center rounded-[10px] ">
        <div className=" mx-6 flex justify-between">
          <div className=" mr-[32px] flex">
            <div className=" text-mainBlack text-[15px] font-semibold font-['Inter'] mr-6">이름</div>
            <div className=" text-[#000000] text-[15px] font-normal font-['Inter']">{listObj.nickname}</div>
          </div>
          <div className=" flex">
            <div className=" text-mainBlack text-[15px] font-semibold font-['Inter'] mr-6">학번</div>
            <div className=" text-[#000000] text-[15px] font-normal font-['Inter']">{listObj.nickname}</div>
          </div>
        </div>
        <div className=" text-[#000000] text-[15px] font-medium font-['Inter']"></div>
      </div>
    </div>
    
  )
}
export default UserListForm;