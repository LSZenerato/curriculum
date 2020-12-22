import React from 'react';
import { Container } from './styles';
import { Title, Text, Image } from '../../atoms';

function TitleDesc({ imageProps, titleProps, textProps}){

  return <Container>
    <div>
      <Image className="image-style" {...imageProps}/>
    </div>
    <div className="desc-div">
      <Title className="title-style" {...titleProps}/>
      <Text className="desc-style" {...textProps}/>
    </div>
  </Container>;
}

export default TitleDesc;