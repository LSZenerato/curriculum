import React from 'react';
import { Button as BtnStyle } from './styles';

const Button: React.FC<Props> = ({ children, ...props }) => {
  return <BtnStyle {...props}>
    {children}
  </BtnStyle>;
}

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: any
}

Button.defaultProps = {
  children: "Default button"
}

export default Button;