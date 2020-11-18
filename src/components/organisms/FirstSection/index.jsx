import React from 'react';
import { TitleDesc } from '../../molecules';
import { Image } from '../../atoms';
import { Container } from './styles';

function FirstSection({ titleDescProps, imageProps, ...props }) {

    return <Container {...props}>
        <TitleDesc {...titleDescProps} />
        <Image {...imageProps}/>
    </Container>;
}

export default FirstSection;