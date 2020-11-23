import React from 'react';
import { Container } from './styles';
import { Title, Text, DividerDiv } from '../../atoms';

function TitleDesc({ titleProps, textProps, dividerDivProps, align}){

  return <Container align={align}>
    <Title {...titleProps}/>
    {/* <DividerDiv {...dividerDivProps} />  */}
    <Text {...textProps}/>
  </Container>;
}

export default TitleDesc;