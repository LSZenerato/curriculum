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
        <Header menuData={menuData} changeTheme={changeTheme} />
        <ButtonGridList menuItems={menuItems} />
      </Container>
    </div>
  );
}

export default Menu;