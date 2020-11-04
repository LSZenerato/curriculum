import React from 'react';
import { Menu } from '../../organisms';
import { Container } from './styles';

interface Props {
  menuProps: any
}

const MyPage: React.FC<Props> = ({ menuProps }) => {
  
  function backgroundEffect() {
    const circleNumber = 20;
    const elements = [];

    const liGenerator = () => {
      for (let i = 0; i < circleNumber; i++) {
        elements.push(<li key={i}></li>);
      }
      return elements;
    }

    return (
      <div className="area" >
        <ul className="circles">
          {liGenerator()}
        </ul>
      </div >
    )
  }

  return <Container>
    <Menu menuProps={menuProps} />
    {backgroundEffect()}
  </Container>
}

export default MyPage;