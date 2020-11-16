import React from 'react';
import { H1 } from './styles';

const Title: React.FC<Props> = ({ children }) => {
  return <H1> 
    {children}
    <div className="div_style" /> 
  </H1>;
}

interface Props {
    children: any
}

export default Title;