import React from 'react';
import { Button as BtnStyle } from './styles';

const Button: React.FC<Props> = ({ children, className, callback }, props) => {
  return <BtnStyle onClick={() => callback()} className={className} {...props}>
    {children}
  </BtnStyle>;
}

interface Props {
  props: any,
  children: any,
  className?: string,
  callback: Function
}

Button.defaultProps = {
  children: 'Click Me',
  className: null,
  callback: () => console.log('CLIQUEI!!!!!')
}

export default Button;