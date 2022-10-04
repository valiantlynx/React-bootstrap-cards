import React from 'react';
import classNames from 'classnames';

const Date = ({ className, variant, text, day, month, year, children }) => {

  const classConfig = classNames({
    'card-date': true,
    [`bg-${variant}`]: variant,
    [`text-${text}`]: text,
    [`${className}`]: className
  })

  return(
    <div className={ classNames(classConfig) }>
      <div className="card-date-day">{ day }</div>
      <div className="card-date-month">{ month }</div>
      <div className="card-date-year">{ year }</div>
      { children }
    </div>
  )
}

export default Date