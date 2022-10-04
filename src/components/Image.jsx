import React from 'react';
import classNames from 'classnames';
import styled, { css } from 'styled-components';

const ImageStyled = styled.img`
  ${( props ) => 
    ( props.bg && css`
      background-image: url(${(props ) => props.bg ? props.bg : ''});
      background-size: cover;
      height: ${( props ) => props.height };
      width: 100%;
    `
    ) || css`
      max-width: 100%;
      height: auto;
    `
  }
`

const Image = ({ alt, src, className, bg, height }) => {

  const classConfig = classNames({
    'img-fluid': true,
    [`${className}`]: className
  })
  return(
    <ImageStyled 
      alt={ alt } 
      src={ src } 
      className={ classNames( classConfig )} 
      bg={ bg } 
      height={ height } 
    />
  )
}


export default Image;