import React from "react";
import classNames from 'classnames';


const Avatar = ({ url, alt, className, size }) => {

  Avatar.defaultProps = {
    size: "60",
    className: "avatar-container"
  };

  const classConfi = classNames({
    [`${Avatar.defaultProps.className}`]: true,
    [`${className}`]: className,
  })

  return (
    <a href="/#" className={ classNames(classConfi) }>
      <img
        src={ url }
        alt={ alt }
        className="avatar-img"
        width={ size ? size : Avatar.defaultProps.size }
        height={ size ? size : Avatar.defaultProps.size }
      />
    </a>
  );
};

export default Avatar;
