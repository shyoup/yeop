import React, { useState, useEffect } from 'react';
import './PostImage.css'

function PostImage({imageList}) {
  const [index, setIndex] = useState(0);
  const prevMove = () => {
    const prevIndex = index - 1;
    setIndex(prevIndex);
  }

  const nextMove = () => {
    const nextIndex = index + 1;
    setIndex(nextIndex);
  }

  useEffect(() => {
    document.getElementById("image_wrapper").style = `transform:translate(-${index*500}px, 0px)`
  }, [index]);


  return (
    <div className="image_container">
      {index !== 0 && (
        <span className="left" onClick={prevMove}>
          <img src='./left-arrow.svg' />
        </span>
      )}
      <div className="image_wrapper">
        <div id="image_wrapper" className='image_wrapper2'>
          {imageList.map((image) => (
              <img className="post__image" src={image}/>
            ))}
        </div>
      </div>
      {index !== imageList.length - 1 && (
        <span className="right" onClick={nextMove} >
          <img src='./right-arrow.svg' />
        </span>
      )}
    </div>
  )
}

export default PostImage