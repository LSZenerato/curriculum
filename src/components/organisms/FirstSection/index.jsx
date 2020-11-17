import React from 'react';
import { TitleDesc } from '../../molecules';
import { Image } from '../../atoms';
import { Container } from './styles';

function FirstSection({ props }) {
    const { imgProps, titleProps, textProps } = props;

    return <Container>
        <Image src={imgProps.src} alt={imgProps.alt} />
        <TitleDesc title={titleProps.children} desc={textProps.children} />
    </Container>;
}

export default FirstSection;