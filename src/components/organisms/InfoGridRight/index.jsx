import React from 'react';
import { ButtonGridList, TitleDesc } from '../../molecules';
import { Container } from './styles';

function ThirdSection({ titleDescProps, buttonGridListProps, ...props }) {

    return <Container {...props}>
        <TitleDesc align="right" {...titleDescProps} />
        <ButtonGridList {...buttonGridListProps} />
    </Container>;
}

export default ThirdSection;