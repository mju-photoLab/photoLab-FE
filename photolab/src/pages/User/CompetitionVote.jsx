import CompetitionSmall from "../../components/Competition/CompetitionSmall";
import Header from "../../components/default/Header";
import CompetitionImage from "../../components/Competition/CompetitionImage";
import { useSelector } from "react-redux";


const CompetitionVote = () => {
  const competitionDetail = useSelector((state) => state.competitionDetail)
  const competitionPhotos = competitionDetail.photoDtos
  return(
    <div className=" w-[1440px] ">
      <Header/>
      <div className=" flex flex-col mt-[50px] items-center">
        <CompetitionImage competitionDetail={competitionDetail}/>
        <div className=" mx-[240px] flex flex-wrap pt-[50px]">
        {
            competitionPhotos.map((a,i) => {
              const competitionPhotoOne = competitionPhotos[i]
              return(
                <CompetitionSmall competitionPhotoOne={competitionPhotoOne}/>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default CompetitionVote;