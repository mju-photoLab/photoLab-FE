import UserListForm from "../../components/admin/List/UserListForm";
import { useLocation } from "react-router-dom";
import AdminHeader from "../../components/default/AdminHeader";

const UserList = () => {
  const {state} = useLocation();
  const title = state.name;
  const list = state.list;
  const listLen = Object.keys(list).length
  console.log(state)
  return(
    <div className=" w-[1440px]">
      <AdminHeader/>
      <div className=" mt-[110px] flex flex-col justify-center items-center w">
        <div className="text-[20px] leading-6 font-bold font-['Inter']">{title}</div>
        <hr className=" border border-['#000000] w-[304px] h-0 my-2"></hr>
      </div>
      <div className=" mx-[240px] text-grey text-xl font-bold font-['Inter'] mt-[50px] ">총 {listLen}명</div>
      
      {
        list.map((a,index) => {
          const listObj = list[index]
          return(
            <UserListForm listObj={listObj}/>
          )
        })
      }
      
    </div>
  )
}
export default UserList;