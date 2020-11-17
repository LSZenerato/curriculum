import React from 'react';
import { H2 } from './styles';

const Text: React.FC<Props> = ({ children }) => {
  return <H2> {children} </H2>;
}

interface Props {
    children: any
}

export default Text;