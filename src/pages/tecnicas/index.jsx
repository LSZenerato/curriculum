import { useEffect } from 'react';
import { Tecnicas } from '../../components/templates';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function TecnicasPage() {
  const SecondSectionProps = {
    titleProps: {
      children: 'Tecnicas utilizadas'
    },
    textProps:{
      children: 'Este site foi desenvolvido utilizando as tecnicas e tecnologias abaixo listadas'
    },
    tecList: [
      {
        title: 'Next Js',
        logo: '/static/next_logo.png',
        onClick: () => alert('alow')
      },
      {
        title: 'PWA',
        logo: '/static/pwa.png',
        onClick: () => alert('alow')
      },
      {
        title: 'React Js',
        logo: '/static/react_logo.png',
        onClick: () => alert('alow')
      },
      {
        title: 'Typescript',
        logo: '/static/typescript.png',
        onClick: () => alert('alow')
      }
    ]
  }

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (success) => console.log('sucesso', success),
  //     (error) => console.log('error', error),
  //     {enableHighAccuracy: true}
  //   );
  // }, []);

  return <Container>
    <Tecnicas SecondSectionProps={SecondSectionProps} />
  </Container>
}
