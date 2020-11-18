import React from 'react';
import { Img } from './styles';

const Image: React.FC<Props> = ({ ...props }) => {
  return <Img loading="lazy" {...props} />;
}

interface Props extends React.HTMLProps<HTMLImageElement> {}

Image.defaultProps = {
  src: "https://img.ibxk.com.br/2020/01/30/30021141299110.jpg?w=1120&h=420&mode=crop&scale=both",
  alt: "Default image"
}

export default Image;