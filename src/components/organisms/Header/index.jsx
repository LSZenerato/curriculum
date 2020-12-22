import React from 'react';
import { TitleDesc } from '../../molecules';
import { Container } from './styles';

function Header({ titleDescProps }) {

    return <Container>
        <TitleDesc {...titleDescProps} />
    </Container>;
}

export default Header;