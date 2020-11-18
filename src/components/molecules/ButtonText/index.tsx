import React from 'react';
import { Container } from './styles';
import { Button, Text, Image } from '../../atoms';

function ButtonText ({ textProps, buttonProps }) {
  
  return <Container>
    <Text {...textProps} />
    <Button {...buttonProps} />
  </Container>;
}

export default ButtonText;