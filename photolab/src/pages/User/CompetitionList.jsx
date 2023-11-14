import CompetitionForm from "../../components/competitionList/CompetitionForm";
import Header from "../../components/default/Header"
import { useSelector } from "react-redux";

const CompetitionList = () => {
  const competitionListData = useSelector((state) => state.competitionList);
  return(
    <div className=" w-[1440px]">
      <Header/>
      <div className=" mt-[110px] flex flex-col justify-center items-center w">
        <div className="text-[20px] leading-6 font-bold font-['Inter']">포토랩 공모전</div>
        <hr className=" border border-['#000000] w-[304px] h-0 my-2"></hr>
      </div>
      <div className=" mx-[240px] text-grey text-xl font-bold font-['Inter'] mt-[50px] ">총 {competitionListData.competitionsCount}개의 공모전</div>
      
      {
        competitionListData.competitionDto.map((a,index) => {
          const compeListDto = competitionListData.competitionDto[index]
          return(
            <CompetitionForm compeListDto={compeListDto}/>
          )
        })
      }
    </div>
  )
}

export default CompetitionList;