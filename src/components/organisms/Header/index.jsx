import React from 'react';
import { TitleDesc, Menu } from '../../molecules';
import { Container } from './styles';

function Header({ titleDescProps, section }) {

    return <Container id={section} >
        {/* <Menu /> */}
        <TitleDesc {...titleDescProps} />
    </Container>;
}

export default Header;