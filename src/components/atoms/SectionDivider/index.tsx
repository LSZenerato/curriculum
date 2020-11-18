import React from 'react';
import { Div } from './styles';

const SectionDivider: React.FC<Props> = ({ type }) => {
  const className = 
    type === 1 ? "divider_1_2" 
    : type === 2 ? "divider_2_3"
    : type === 3 && "divider_3_4";

  return <Div>
    <div className={className} />
  </Div>;
}

interface Props {
  type: number
}

export default SectionDivider;