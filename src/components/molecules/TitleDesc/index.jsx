import React from 'react';
import { Container } from './styles';
import { Title, Text } from '../../atoms';

function TitleDesc({ title, desc }) {
  return <Container>
    <Title>{title}</Title>
    <div className="div_style" /> 
    <Text>{desc}</Text>
  </Container>;
}

export default TitleDesc;