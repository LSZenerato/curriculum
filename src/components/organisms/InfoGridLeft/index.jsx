import React from 'react';
import { ButtonGridList, TitleDescLeft } from '../../molecules';
import { Container } from './styles';

function InfoGridLeft({ titleDescProps, buttonGridListProps }) {

    return <Container>
        <TitleDescLeft {...titleDescProps} />
        <ButtonGridList {...buttonGridListProps} />
    </Container>;
}

export default InfoGridLeft;