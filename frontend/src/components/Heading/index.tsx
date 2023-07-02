import React, { ReactNode } from 'react'
import { styled } from 'styled-components';

const Heading = ({ children }: { children?: ReactNode }) => {
  return (
    <HeadingWrapper>
      {children}
    </HeadingWrapper>
  )
}

export default Heading;

const HeadingWrapper = styled.h1`
  text-align: center;
  font-weight: bold;
`
