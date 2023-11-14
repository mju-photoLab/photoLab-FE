import { useNavigate } from "react-router-dom";
import HomeCompetitionImage from "./HomeCompetitionImage";

const MainCompetition = ({homeData}) => {
  const navigate = useNavigate();
  const competitionTitle = homeData.competition_title;
  const competitionContent = homeData.competition_content;
  const bestPhotos = homeData.bestPhotos
  
  return(
    <div className="py-[60px] flex justify-center w-[1440px] bg-muteBg">
      <div className=" w-[944px] flex justify-between">
        <div className="flex flex-col justify-between ">
          <div className=" w-[232px]">
            <div className="my-[6px] text-zinc-800 text-6xl font-extrabold font-['Pretendard']">{competitionTitle}</div>
            <div className=" my-[4px] text-neutral-700 text-xl font-semibold font-['Pretendard']">
              {competitionContent.split('\n').map(line => {
                return (<span>{line}<br/></span>)
              })}
            </div>
          </div>
          <div className="bg-[#FFFFFF] border border-solid border-[#000000] rounded-[10px] flex items-center justify-center w-[180px] h-[50px] ">
            <div className="text-right text-zinc-800 text-xl font-semibold font-['Pretendard'] cursor-pointer " onClick={() => {navigate('/competitionvote')}}>🗳️ 투표하러 가기</div>
          </div>
        </div>
        <div className=" w-[720px] flex flex-wrap justify-end">
          {bestPhotos.map((image, index) => {
            return(<HomeCompetitionImage homeData={homeData} photoInfo={bestPhotos[index]} />)
          })}
        </div>
      </div>
      
    </div>
  )
}

export default MainCompetition;