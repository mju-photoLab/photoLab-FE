import { useLocation, useNavigate } from "react-router-dom";
import AdminHeader from "../../components/default/AdminHeader";
import ListForm from "../../components/admin/List/ListForm";

const List = () => {
  const {state} = useLocation();
  const title = state.name;
  const list = state.list;
  const listLen = Object.keys(list).length
  const engName = state.engName
  const navigate = useNavigate();

  return(
    <div className=" w-[1440px]">
      <AdminHeader/>
      <div className=" mt-[110px] flex flex-col justify-center items-center w">
        <div className="text-[20px] leading-6 font-bold font-['Inter']">{title}</div>
        <hr className=" border border-['#000000] w-[304px] h-0 my-2"></hr>
      </div>
      <div className=" flex justify-between  ml-[240px] mt-[50px] mr-[256px]">
        <div className=" text-grey text-xl font-bold font-['Inter'] ">총 {listLen}개의 {engName}</div>
        <div onClick={() => {navigate(`/admin/${engName}/imageUpload`)}} className=" cursor-pointer text-mainBlack text-[15px] font-bold font-['Inter'] ">+ 새로운 {engName} 등록하기</div>
      </div>
      
      {
        list.map((a,index) => {
          const listObj = list[index]
          return(
            <ListForm listObj={listObj} engName={engName}/>
          )
        })
      }
      
    </div>
  )
}

export default List;