const InputInfo = (props) => {
  const name = props.name;
  return(
    <div>
      <div className=" text-mainBlack text-xl font-bold font-['Pretendard'] my-2">{name}</div>
      <input placeholder={`${name}을 입력하세요`} className=" w-[328px] h-[50px] bg-realWH rounded-[5px] border-black border mb-2 border-1 pl-[9px]"/>
    </div>
  )
}
export default InputInfo;