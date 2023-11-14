import Header from "../../components/default/Header"
import mainView from '../../assets/mainView.png'
import MainCompetition from "../../components/Home/MainCompetition"
import Exhibition from "../../components/Home/Exhibition"
import { useSelector } from "react-redux"
const Home = () => {
  
  const homeData = useSelector((state) => state.home);
  return(
    <div>
      <Header/>
      <img src={mainView} alt="phtolabMain" className="w-[1440px] h-[500px] pt-[60px] min-w-[1440px]"/>
      <MainCompetition homeData={homeData}/>
      <Exhibition homeData={homeData}/>
    </div>
    
  )
}

export default Home;