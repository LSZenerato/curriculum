import React from 'react';
import { Container } from './styles';
import { Title, Text, Image } from '../../atoms';
import { useRouter} from 'next/router';

function TitleDesc({ imageProps, titleProps, textProps}){
  const router = useRouter();

  return <Container>
    <a href="#" class="active">Home</a>
    <a onClick={() => router.asPath.match("#about_section")}>Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    <a href="#">Link 4</a>
  </Container>;
}

export default TitleDesc;