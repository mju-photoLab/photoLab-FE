
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Heart from '../default/Heart'

const CompetitionSmall = (props) => {
  const photoOne = props.competitionPhotoOne
  const navigate = useNavigate();
  const likeState = photoOne.likeState


  return(
    <div className="w-[304px] h-[324px] relative mt-3 mx-[8px] bg-muteBg">
      <div className=" w-full h-full bg-gray-50 rounded-[10px] border border-solid">
        <img className="w-[304px] h-60 rounded-t-[10px] cursor-pointer object-cover" src={photoOne.imagePath} onClick={() => {navigate('/imageDetail')}}/>
        <div className=" flex w-full justify-between px-[26px] pt-[16px] items-start">
          <div className='flex'>
            <div className=' text-indigo-900 text-[25px] font-semibold font-[Pretendard]'>{photoOne.photoId}</div>
            <div className=" pl-4">
              <div className=' text-indigo-900 text-[15px] font-semibold font-["Pretendard"] mb-2 leading-[30px]' onClick={() => {navigate('/imageDetail')}}>{photoOne.title} - {photoOne.photographer}</div>
              <div className=' text-neutral-700 text-xs font-medium font-["Pretendard"]'>좋아요 {photoOne.likeCount}개</div>
            </div>
          </div>
          <Heart likeState={likeState}/>
        </div>
      </div>
    </div>
  )
}

export default CompetitionSmall;