import React from 'react';
import { Image, Title } from '../../atoms';
import { Container } from './styles';

function Header({ titleProps }) {

    return <Container>
        <Title className="title_style" children={titleProps.children} />
    </Container>;
}

export default Header;