import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo.svg'

const AdminHeader = () => {
  const navigate = useNavigate();
  return(
    <div className=' w-[1440px] h-[60px] flex justify-center items-center fixed z-30 top-0 bg-realWH border-b-0.5 border-["#B8B8B8"]'>
      <div className=' flex items-center justify-between w-[960px]'>
        <img src={logo} alt="logoImage" className='w-[112px] h-[24px]' onClick={() => {navigate('/')}}/>
        <div className=' flex w-[109px] h-[32px] justify-between'>
          <img className="w-8 h-8 rounded-[46px]" src="https://via.placeholder.com/32x32" />
          <div className="text-center text-neutral-700 text-[15px] font-semibold font-['Pretendard'] leading-tight">이수연 님</div>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader

