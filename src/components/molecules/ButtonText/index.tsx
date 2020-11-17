import React from 'react';
import { Container } from './styles';
import { Button, Text, Image } from '../../atoms';

function ButtonText ({ desc, buttonProps, textAlign, alignItems }) {
  
  return <Container style={{ textAlign: textAlign, alignItems: alignItems }}>
    <Text className="text_class" >{desc}</Text>
    <Button 
      aria-label={buttonProps.title}
      onClick={() => buttonProps.onClick()} >
        <Image className="img_class" src={buttonProps.src} alt={buttonProps.alt}/>
    </Button>
  </Container>;
}

export default ButtonText;