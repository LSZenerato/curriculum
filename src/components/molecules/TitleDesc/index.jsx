import React from 'react';
import { Container } from './styles';
import { Title, Text, DividerDiv } from '../../atoms';

function TitleDesc({ titleProps, textProps, align}){

  return <Container align={align}>
    <Title {...titleProps}/>
    <Text {...textProps}/>
  </Container>;
}

export default TitleDesc;