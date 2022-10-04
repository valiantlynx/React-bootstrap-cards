import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const cardGradient = ({className, ...props}) => {
  
  const classConfig = classNames({
    'card': true,
    [`gradient-${props.gradient}`]: true,
    [`${className}`]: className,
  });

  
  return(
    <div className={ classNames( classConfig)} {...props}>
      <div className="card-body">
        { props.children }
      </div>
    </div>
  )
}

cardGradient.propTypes = {
  gradient: PropTypes.string.isRequired,
}


export default cardGradient;