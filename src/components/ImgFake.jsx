import React from 'react';
import classNames from 'classnames';

const ImgFake = ({ className, width, height }) => {

  const classConfig = classNames({
    'img-fluid': true,
    [`${className}`]: className
  })
  return(
    <svg 
    className={ classNames( classConfig )}
    width={ width ? width : ImgFake.defaultPropsImg.width }
    height={ height ? height : ImgFake.defaultPropsImg.height }
    xmlns="http://www.w3.org/2000/svg" 
    preserveAspectRatio="xMidYMid slice" 
    focusable="false" 
    role="img">
      <rect width="100%" height="100%" fill="#434e58"></rect>
    </svg>
  )
}

ImgFake.defaultPropsImg = {
  width: '100%',
  height: '200px'
}

export default ImgFake;