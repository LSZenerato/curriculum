import React from 'react';
import { Container } from './styles';

interface Props {
    changeTheme: () => void,
    menuData: IData
}

interface IData { 
    text_1: string,
    text_2: string,
    text_3: string
}

const Header: React.FC<Props> = ({ changeTheme, menuData }) => {
    return (
        <Container>
            <h1 className="title">
                {menuData.text_1} <span>{menuData.text_2}</span>
            </h1>
            <h1 className="sub_title">
                {menuData.text_3}
            </h1>
        </Container>
    );
}

Header.defaultProps = {
    changeTheme: () => alert('Pass properties to this component'),
    menuData: {
        text_1: 'Text 1',
        text_2: 'Text 2',
        text_3: 'Sub Text',
    }
}

export default Header;