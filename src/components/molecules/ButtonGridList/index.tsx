import React from 'react';
import { Container } from './styles';

interface Props {
  menuItems: Array<IDataArray>
}

interface IDataArray { 
  title: string,
  logo: string
}

const ButtonGridList: React.FC<Props> = ({ menuItems }) => {

    return (
        <Container>
          {
            menuItems.map((value, index) => {
              return <div key={value.title + index} className="img_menu_round_div">
                <h3>{value.title}</h3>
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
      logo: 'src'
    },
    {
      title: 'Item 2',
      logo: 'src'
    },
    {
      title: 'Item 3',
      logo: 'src'
    },
  ]
}

export default ButtonGridList;