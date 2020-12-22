import React from 'react';
import { TitleDesc, Menu } from '../../molecules';
import { Container } from './styles';

function Header({ titleDescProps }) {

    return <Container>
        {/* <Menu /> */}
        <TitleDesc {...titleDescProps} />
    </Container>;
}

export default Header;