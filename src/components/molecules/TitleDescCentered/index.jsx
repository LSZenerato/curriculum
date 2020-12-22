import React from 'react';
import { Container } from './styles';
import { Title, Text, DividerDiv } from '../../atoms';

function TitleDescCommon({ titleProps, textProps}){

  return <Container>
    <Title className="title_style" {...titleProps}/>
    <Text className="desc_style" {...textProps}/>
  </Container>;
}

export default TitleDescCommon;