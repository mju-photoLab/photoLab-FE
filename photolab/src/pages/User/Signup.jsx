import InputInfo from "../../components/LoginSignup/InputInfo";

const Signup = () => {
  return(
    <div className=" w-[1440px] h-full my-[95px] flex flex-col items-center">
      <div className=" text-mainBlack text-3xl font-bold font-['Pretendard'] mb-[37px]">회원가입</div>
      <InputInfo name='이름' content='이릅을 입력하세요.'/>
      <InputInfo name='학번' content='학번을 입력하세요.'/>
      <div className=" flex flex-col">
        <InputInfo name='비밀번호' content='사용하실 비밀번호를 입력하세요.'/>
        <input placeholder={"비밀번호 확인"} className=" w-[328px] h-[50px] bg-realWH rounded-[5px] border-black border mb-2 border-1 pl-[9px]"/>
      </div>
      <InputInfo name='이메일' content='사용하실 이메일 주소를 입력해주세요.'/>
      <div className="flex justify-center items-center w-[328px] h-[50px] bg-[#4A63BC] rounded-[5px] mt-[51px]">
        <div className=" text-realWH text-base font-semibold font-['Inter'] my-1">회원가입 완료</div>
      </div>
    </div>
  )
}
export default Signup;