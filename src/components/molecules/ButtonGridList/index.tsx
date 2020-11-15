import React from 'react';
import { Container } from './styles';

interface Props {
  menuItems: Array<IDataArray>
}

interface IDataArray { 
  title: string,
  onClick: () => void,
  logo: string
}

const ButtonGridList: React.FC<Props> = ({ menuItems }) => {

    return (
        <Container>
          {
            menuItems.map((value, index) => {
              return <div className="item_div" key={index}>
                <button 
                  onClick={() => value.onClick()}
                  key={value.title + index} 
                  className="img_menu_round_div">
                    <img src={value.logo} alt={value.title} />
                </button>
                <h4>{value.title}</h4>
              </div>
            })
          }
        </Container>
    );
}

ButtonGridList.defaultProps = {
  menuItems: [
    {
      title: 'Item 1',
      logo: 'src',
      onClick: () => alert('sem função')
    },
    {
      title: 'Item 2',
      logo: 'src',
      onClick: () => alert('sem função')
    },
    {
      title: 'Item 3',
      logo: 'src',
      onClick: () => alert('sem função')
    },
  ]
}

export default ButtonGridList;