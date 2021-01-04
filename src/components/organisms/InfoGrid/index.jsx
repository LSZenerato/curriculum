import React from 'react';
import { ButtonGridList, TitleDescCentered } from '../../molecules';
import { Container } from './styles';

function InfoGridLeft({ titleDescProps, buttonGridListProps, style, section }) {

    return <Container style={style} id={section} >
        <TitleDescCentered {...titleDescProps} />
        <ButtonGridList {...buttonGridListProps} />
    </Container>;
}

export default InfoGridLeft;