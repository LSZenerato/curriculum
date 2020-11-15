import React from 'react';
import { Header, ButtonGridList } from '../../molecules';
import { Container } from './styles.js';

interface Props {
  menuProps: any
}

const Menu: React.FC<Props> = ({ menuProps }) => {
  const { menuData, menuItems, changeTheme } = menuProps;

  return (
    <div>
      <Container>
        <ButtonGridList menuItems={menuItems} />
        <Header menuData={menuData} changeTheme={changeTheme} />
      </Container>
    </div>
  );
}

export default Menu;