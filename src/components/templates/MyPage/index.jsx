import React, { useState } from 'react';
import { Menu } from '../../organisms';
import { Container } from './styles';

function MyPage({ menuProps }) {
  
  function backgroundEffect() {
    const circleNumber = 10;
    const elements = [];

    const liGenerator = () => {
      for (let i = 0; i < circleNumber; i++) {
        elements.push(<li key={i}></li>);
      }
      return elements;
    }

    return (
      <div class="area" >
        <ul class="circles">
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