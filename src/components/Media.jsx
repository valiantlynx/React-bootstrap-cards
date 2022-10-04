import React from "react";
import classNames from 'classnames';

const Media = ({ className, children, linkColor, name, subtitle }) => {
  return(
    <div className={`card-media ${className}`}>
      { children }
      <div className="media-body">
        <h5 className="mb-1">
          <a 
            className={ classNames({ 'card-media-link': true, [`text-${linkColor}`]: linkColor })} 
            href="/#">{ name }
          </a>
        </h5>
        { subtitle && <div className="text-muted">{ subtitle }</div> }
      </div>
    </div>
  );
};

Media.defaultProps = {
  linkClassName: 'card-media-link',
}

export default Media;