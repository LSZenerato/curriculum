import React from 'react';
import { Container } from './styles';
import { Title, Text } from '../../atoms';

function TitleDesc({ title, desc, textAlign, alignItems }) {
  
  return <Container style={{ textAlign: textAlign, alignItems: alignItems }}>
    <Title>{title}</Title>
    <div className="div_style" /> 
    <Text>{desc}</Text>
  </Container>;
}

export default TitleDesc;