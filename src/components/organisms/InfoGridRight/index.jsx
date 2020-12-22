import React from 'react';
import { ButtonGridList, TitleDescRight } from '../../molecules';
import { Container } from './styles';

function InfoGridRight({ titleDescProps, buttonGridListProps }) {

    return <Container>
        <ButtonGridList {...buttonGridListProps} />
        <TitleDescRight {...titleDescProps} />
    </Container>;
}

export default InfoGridRight;