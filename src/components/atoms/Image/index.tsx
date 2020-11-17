import React from 'react';
import { Img } from './styles';

const Image: React.FC<Props> = ({ ...props }) => {
  return <Img loading="lazy" {...props} />;
}

interface Props extends React.HTMLProps<HTMLButtonElement> {}

export default Image;