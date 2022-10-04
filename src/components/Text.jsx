import React from 'react';
import classNames from 'classnames';

const tagsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  span: "span",
  div: "div",
  li: "li",
  b: "b",
  small: "small",
  strong: "strong",
  cite: "cite",
  del: "del"
};
const mapColor = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
  muted: 'muted',
  dark: 'dark',
  white: 'white'
}

const Text = ({ tag, color, className, children, ...props }) => {
  

  const Component = tag ? tagsMapping[tag] : "p"; // <Text tag="..." ></Text> default tag "p"
  const colors = color ? mapColor[color] : undefined; // <Text color="..." ></Text> default color "undefined"
  
  const classConfig = classNames({
    [`${className}`]: className,
    [`text-${colors}`]: color
  });

  return (
    <Component className={`${classNames( classConfig)}`}{...props}>
      {children}
    </Component>
  );
};


export default Text;