import React from 'react';
import { ButtonGridList, TitleDescCentered } from '../../molecules';
import { Container } from './styles';

function InfoGridLeft({ titleDescProps, buttonGridListProps, style }) {

    return <Container style={style} >
        <TitleDescCentered {...titleDescProps} />
        <ButtonGridList {...buttonGridListProps} />
    </Container>;
}

export default InfoGridLeft;