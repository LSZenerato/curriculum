import React from 'react';
import { Div } from './styles';

const SectionDivider: React.FC<Props> = ({ type }) => {
  const className = 
    type === 12 ? "divider_1_2" 
    : type === 13 ? "divider_1_3"
    : type === 21 ? "divider_2_1"
    : type === 23 ? "divider_2_3"
    : type === 31 ? "divider_3_1"
    : type === 32 && "divider_3_2";

  return <Div>
    <div className={className} />
  </Div>;
}

interface Props {
  type: number
}

export default SectionDivider;