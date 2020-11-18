import React from 'react';
import { H1, Div } from './styles';

const Title: React.FC<Props> = ({ children, ...props }) => {
  return <H1 {...props}>
    {children}
  </H1>;
}

interface Props extends React.HTMLProps<HTMLHeadElement> {
  children: any
}

Title.defaultProps = {
  children: "Default title"
}

export default Title;