import React from 'react';
import { TitleDesc } from '../../molecules';
import { Image } from '../../atoms';
import { Container } from './styles';

function FirstSection({ props }) {
    const { imgProps, titleProps, textProps } = props;

    return <Container>
        <TitleDesc title={titleProps.children} desc={textProps.children} textAlign="right" alignItems="flex-end" />
        <Image className="image_style" src={imgProps.src} alt={imgProps.alt} />
    </Container>;
}

export default FirstSection;