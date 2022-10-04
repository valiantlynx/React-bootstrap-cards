import React from "react";
import classNames from 'classnames';

const AvatarHistory = ({className, size, avatar, alt, ...props}) => {

  const classConfig = classNames({
    'avatar-container': true,
    [`${className}`]: className
  })

  return (
    <a 
      {...props} 
      className={ classNames(classConfig) } 
      style={{ width: `${ size }px`, height: `${ size }px`}}>
      <img 
        className="avatar-image"
        height={ size - 20 }
        width={ size - 20 }
        src={ avatar }
        alt={ alt }/>
      <svg
        viewBox="0 0 100 100"
        className="avatar-border-effect"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img">
        <circle cx="50" cy="50" r="45"></circle>
      </svg>
    </a>
  );
};



export default AvatarHistory;
