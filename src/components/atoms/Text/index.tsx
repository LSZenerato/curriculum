import React, { HtmlHTMLAttributes } from 'react';
import { H2 } from './styles';

const Text: React.FC<Props> = ({ children, ...props }) => {
  return <H2 {...props}> {children} </H2>;
}

interface Props extends React.HTMLProps<HTMLLabelElement> {
    children: any
}

export default Text;