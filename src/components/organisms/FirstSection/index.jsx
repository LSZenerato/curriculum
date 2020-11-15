import React from 'react';
import { Title, Text, Button } from '../../atoms';
import { Container } from './styles';

function FirstSection({ props }) {
    const { imgProps, titleProps, textProps, buttonProps } = props;

    return <Container>
        <img src={imgProps.src} alt={imgProps.alt} />
        <div className="outside-div">
            <Title>{titleProps.children}</Title>
            <Text>{textProps.children}</Text>
            <Button className={buttonProps.className} onClick={() => buttonProps.onClick()} >{buttonProps.children}</Button>
        </div>
    </Container>;
}

export default FirstSection;