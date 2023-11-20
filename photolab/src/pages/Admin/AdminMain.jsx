import { useSelector } from "react-redux";
import ManagementBox from "../../components/admin/main/ManagementBox";
import ManagementBoxLong from "../../components/admin/main/ManagementBoxLong";
import AdminHeader from "../../components/default/AdminHeader"

const AdminMain = () => {
  const competitionList = useSelector((state) => state.competitionList)
  const exhibitionList = useSelector((state) => state.exhibitionListData)
  const userList = useSelector((state) => state.userListData);
  
  console.log(competitionList.competitionDto)
  console.log(exhibitionList.exhibitionDtos)
  console.log(userList)
  return(
    <div className=" w-[1440px] h-full bg-[#B8B8B8]">
      <AdminHeader/>
      <div className=" pt-[108px] mx-[248.5px]">
        <div className="w-[944px] h-[200px] bg-[#6370A1] rounded-[10px] flex justify-start items-center">
          <div className=" ml-[50px] w-[371px] h-[85px] flex justify-between">
            <img className="w-[85px] h-[85px] rounded-[46px]" src="https://via.placeholder.com/85x85" />
            <div className=" w-64 h-[85px] items-start flex justify-center flex-col">
              <div className=" text-muteBg text-3xl font-extrabold font-['Pretendard']">이수연님 안녕하세요</div>
              <div className=" text-muteBg text-[15px] font-normal font-['Pretendard']">회원님은 관리자 입니다.</div>
            </div>
          </div>
        </div>
        <div className=" w-[944px] flex mt-[18px] justify-between">
          <div className=" flex flex-col">
            <ManagementBox listData={competitionList.competitionDto} engName={'competition'} name={'공모전 관리'} content={'새롭게 열리는 공모전을 등록하고 수정할 수 있습니다.'} url={'manage/competition'}/>
            <ManagementBox listData={exhibitionList.exhibitionDtos} engName={'exhibition'} name={'전시회 관리'} content={'새로운 전시회를 등록하고 수정할 수 있습니다.'} url={'manage/exhibition'}/>
          </div>
          <ManagementBoxLong listData={userList} engName={'user'} name={'회원 관리'} content={'회원 정보를 확인하고 관리자 권한을 부여/삭제 할 수 있습니다.'} url={'manage/user'}/>
        </div>
      </div>
    </div>
  )
}

export default AdminMain;