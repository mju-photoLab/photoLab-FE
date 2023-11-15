import Header from '../../components/default/Header.jsx'
import { useSelector } from 'react-redux'
import ExhibitionImageSmall from '../../components/exhibition/ExhibitionImageSmall.jsx'
const ExhibitionPage = () => {
  const exhibitionData = useSelector((state) => state.exhibitionData)
  return(
    <div className=" w-[1440px] flex justify-center items-center">
      <Header/>
      <div className=' flex w-[960px] mt-[110px]'>
        <div className=' flex flex-col items-start mr-[27px]'>
          <div className=' w-[160px] text-mainBlack text-[40px] font-bold font-["Inter"] mb-12'>
            {exhibitionData.exhibitionTitle.split('\n').map(line => {
              return (<span>{line}<br/></span>)
            })}
          </div>
          <div className=' w-[205px] text-mainBlack text-[15px] font-normal font-["Inter"] leading-[30px]'>{exhibitionData.exhibitionContent}</div>
        </div>
        <div className=' flex flex-wrap'>
          {exhibitionData.photos.map((a,index) => {
            const photoOneItem = exhibitionData.photos[index]
            return(
              <ExhibitionImageSmall photoOneItem={photoOneItem}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default ExhibitionPage;