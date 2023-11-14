import heart from '../../assets/heart.svg'
import FilledHeart from '../../assets/Fillheart.svg'
import { useState } from 'react';
const Heart = (props) => {
  const [heartState, setHeartClicked] = useState(props.likeState);
  const heartClicked = () => {
    heartState === false ? setHeartClicked(true) : setHeartClicked(false);
  }

  return(
    <div>
      {
        heartState === false 
        ? <img src={heart} alt='emptyHeart' onClick={heartClicked} className=' pt-[9px] cursor-pointer'/>
        : <img src={FilledHeart} alt='filledHeart' onClick={heartClicked} className=' pt-[9px] cursor-pointer'/>
      }
    </div>
  )
}
export default Heart;
