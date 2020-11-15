import React from 'react';
import { H3 } from './styles';

const Text: React.FC<Props> = ({ children }) => {
  return <H3> {children} </H3>;
}

interface Props {
    children: any
}

export default Text;