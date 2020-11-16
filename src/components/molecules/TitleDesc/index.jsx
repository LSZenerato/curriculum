import React from 'react';
import { Container } from './styles';
import { Title, Text } from '../../atoms';

function TitleDesc({ title, desc }) {
  return <Container>
    <Title>{title}</Title>
    <Text>{desc}</Text>
  </Container>;
}

export default TitleDesc;