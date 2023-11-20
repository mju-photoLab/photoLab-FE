
const CompetitionLogo = (props) => {

  return(
    <div className=" w-[944px] h-[150px] bg-stone rounded-[20px] mb-[50px]">
      <div className=" py-[33px] pl-[56px] flex flex-col justify-between">
        <input onChange={(e) => props.setCompetitiontitle(e.target.value)} placeholder="제목을 입력하세요" className=" placeholder:font-['Pretendard'] placeholder:text-muteBg placeholder:border-none w-fit bg-stone text-3xl font-extrabold font-['Pretendard'] text-muteBg"/>
        <input onChange={(e) => props.setCompetitioncontent(e.target.value)} placeholder="내용을 입력하세요" className=" placeholder:font-['Pretendard'] placeholder:text-muteBg placeholder:border-none w-fit bg-stone text-muteBg text-xl font-extrabold font-['Pretendard'] pt-6"/>
      </div>
    </div>
  )
}

export default CompetitionLogo;