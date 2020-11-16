import React from 'react';
import { ButtonGridList, TitleDesc } from '../../molecules';
import { Container } from './styles';

function SecondSection({ props }) {
    const { titleProps, textProps, tecList } = props;

    return <Container>
        <TitleDesc title={titleProps.children} desc={textProps.children} />
        <ButtonGridList menuItems={tecList} />
    </Container>;
}

export default SecondSection;