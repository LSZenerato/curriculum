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
      children: 'Técnicas utilizadas'
    },
    textProps:{
      children: 'Este site foi desenvolvido utilizando as técnicas, tecnologias e conceitos abaixo listados'
    },
    tecList: [
      {
        title: 'Next Js',
        logo: '/static/next_logo.webp',
        alt: 'Next Js',
        onClick: () => alert('alow')
      },
      {
        title: 'React Js',
        logo: '/static/react_logo.webp',
        alt: 'React JS',
        onClick: () => alert('alow')
      },
      {
        title: 'Typescript',
        logo: '/static/typescript.webp',
        alt: 'Typescript',
        onClick: () => alert('alow')
      },
      {
        title: 'Javascript',
        logo: '/static/typescript.webp',
        alt: 'Javascript',
        onClick: () => alert('alow')
      },
      {
        title: 'PWA',
        logo: '/static/pwa.webp',
        alt: 'PWA',
        onClick: () => alert('alow')
      },
      {
        title: 'Mobile First',
        logo: '/static/pwa.webp',
        alt: 'Mobile First',
        onClick: () => alert('alow')
      },
      {
        title: 'Acessibilidade',
        logo: '/static/pwa.webp',
        alt: 'Acessibilidade',
        onClick: () => alert('alow')
      },
    ]
  }

  useEffect(async () => {
    // if (
    //   "mediaDevices" in navigator &&
    //   "getUserMedia" in navigator.mediaDevices
    // ) {
    //   const video = document.querySelector("#video");
    //   const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
    //   video.srcObject = videoStream;
    //   video.play();

    //   // put in html <video autoplay id="video"></video>
    // }
    // navigator.geolocation.getCurrentPosition(
    //   (success) => console.log('sucesso', success),
    //   (error) => console.log('error', error),
    //   {enableHighAccuracy: true}
    // );
  }, []);

  return <Container>
    <Tecnicas SecondSectionProps={SecondSectionProps} />
  </Container>
}
