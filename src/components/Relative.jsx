import React from 'react';
import classNames from 'classnames';


const Relative = ({className, ...props}) => {

  const classConfig = classNames({
    'position-relative': true,
    [`${className}`]: className,
  });
  
  return(
    <div className={ classNames( classConfig)} {...props}>
      { props.children }
    </div>
  )
}

export default Relative;