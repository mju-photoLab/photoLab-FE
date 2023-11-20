import InputInfo from "../../components/LoginSignup/InputInfo"
import LoginImage from '../../assets/Rectangle 92.png'
const AdminLogin = () => {
  return(
    <div className=" w-[1440px] h-full bg-muteBg">
      <div className=" w-[784px] h-[478px] mx-[328px] flex my-[100px]">
        <div className="w-1/2 h-full flex flex-col items-start">
          <div className=" text-center text-mainBlack text-3xl font-bold font-['Pretendard'] mb-4">어드민 페이지 로그인</div>
          <InputInfo name="ID" content="아이디를 입력하세요"/>
          <InputInfo name="Password" content='비밀번호를 입력하세요'/>
          <div className=" mt-3">
            <div className="flex justify-center items-center w-[328px] h-[50px] bg-[#4A63BC] rounded-[5px] my-1">
              <div className=" text-realWH text-base font-semibold font-['Inter'] my-1">로그인</div>
            </div>
          </div>
        </div>
        <img className=" w-1/2 h-full" src={LoginImage}/>
      </div>
    </div>
  )
}
export default AdminLogin