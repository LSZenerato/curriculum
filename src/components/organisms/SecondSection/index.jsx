import React from 'react';
import { ButtonGridList, TitleDesc } from '../../molecules';
import { Container } from './styles';

function SecondSection({ titleDescProps, buttonGridListProps, ...props }) {

    return <Container {...props}>
        <TitleDesc {...titleDescProps} />
        <ButtonGridList {...buttonGridListProps} />
    </Container>;
}

export default SecondSection;