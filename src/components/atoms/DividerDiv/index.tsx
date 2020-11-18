import React from 'react';
import { Div } from './styles';

const DividerDiv: React.FC<Props> = ({ ...props }) => {
  return <Div {...props}>
    <div />
  </Div>;
}

interface Props extends React.HTMLProps<HTMLDivElement> {}

export default DividerDiv;