import React from 'react';
import { Container } from './styles.js';

interface Props {
  menuProps: any
}

const Menu: React.FC<Props> = ({ menuProps }) => {
  const { changeTheme, menuItems, menuData } = menuProps;

  return (
    <div>
      <Container>
        <div className="title_menu_div">
          <button onClick={() => changeTheme()}> Apagar a luz </button>
          <h1 className="title">
            {menuData.text_1} <span>{menuData.text_2}</span>
          </h1>
          <h1 className="sub_title">
            {menuData.text_3}
          </h1>
        </div>
        <div className="img_tech_div">
          {
            menuItems.map((value, index) => {
              return <div key={value.title + index} className="img_menu_round_div">
                <h3>{value.title}</h3>
                {/* <img className="img_tech" src={value.logo} alt={value.title} /> */}
              </div>
            })
          }
        </div>
      </Container>
    </div>
  );
}

export default Menu;