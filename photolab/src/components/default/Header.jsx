import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo.svg'

const Header = () => {
  const navigate = useNavigate();
  return(
    <div className=' w-[1440px] h-[60px] flex justify-center items-center fixed z-30 top-0 bg-realWH border-b-0.5 border-["#B8B8B8"]'>
      <div className=' flex items-center justify-between w-[960px]'>
        <img src={logo} alt="logoImage" className='w-[112px] h-[24px]' onClick={() => {navigate('/')}}/>
        <div className=' w-[300px] flex justify-between'>
          <div className=' text-mainBlack text-[15px] font-bold font-["Pretendard"] leading-tight'>포토랩 소개</div>
          <div className=' text-mainBlack text-[15px] font-bold font-["Pretendard"] leading-tight cursor-pointer' onClick={() => {navigate('/competitionList')}}>포토랩 공모전</div>
          <div className=' text-mainBlack text-[15px] font-bold font-["Pretendard"] leading-tight'>포토랩 전시</div>
        </div>
        <div className=' flex'>
          <div className='flex mr-[8px] text-mainBlack text-[15px] font-bold font-["Pretendard"] leading-tight' onClick={() => {navigate('/login')}}>로그인</div>
          <div className='flex ml-[8px] text-mainBlack text-[15px] font-bold font-["Pretendard"] leading-tight'>회원가입</div>
        </div>
      </div>
    </div>
  )
}

export default Header
