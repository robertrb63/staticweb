import './mIcon.css'


import { useState } from 'react';

const myIcon = () => {

  const [liked, setLiked] = useState(false)

  const handleClick = ()=>{
    if(liked == true){
      setLiked(false)
    }else{
      setLiked(true)
    }
  }

  return (
    <div onClick={handleClick}>
      {liked == true ? <Option1/> : <Option2/>}
    </div>
  );
}

export default myIcon