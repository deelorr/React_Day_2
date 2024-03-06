import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const LikeButton = () => {

  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    if (liked) {
      console.log('unliked')
    } else {
      console.log('liked')
    }
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {liked ? <FaHeart fill="#ff0000" /> : <FaHeart />}
      </button>
    </div>
  )
}

export default LikeButton
