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
    buttonGridListProps: {
      buttonProps: {

      },
      imageProps: {

      },
      textProps: {

      },
      list: [
        {
          title: 'Next Js',
          src: '/static/next_logo.webp',
          alt: 'Next Js',
          onClick: () => alert('alow')
        },
        {
          title: 'React Js',
          src: '/static/react_logo.webp',
          alt: 'React JS',
          onClick: () => alert('alow')
        },
        {
          title: 'Typescript',
          src: '/static/typescript.webp',
          alt: 'Typescript',
          onClick: () => alert('alow')
        },
        {
          title: 'Javascript',
          src: '/static/typescript.webp',
          alt: 'Javascript',
          onClick: () => alert('alow')
        },
        {
          title: 'PWA',
          src: '/static/pwa.webp',
          alt: 'PWA',
          onClick: () => alert('alow')
        },
        {
          title: 'Mobile First',
          src: '/static/pwa.webp',
          alt: 'Mobile First',
          onClick: () => alert('alow')
        },
        {
          title: 'Acessibilidade',
          src: '/static/pwa.webp',
          alt: 'Acessibilidade',
          onClick: () => alert('alow')
        },
      ]
    },
    titleDescProps: {
      titleProps: {
        children: 'Técnicas utilizadas',
        className: "ss_text_config",
      },
      textProps:{
        children: 'Este site foi desenvolvido utilizando as técnicas, tecnologias e conceitos abaixo listados',
        className: "ss_text_config",
      },
      dividerDivProps: {
        className: "ss_divider_div_config"
      }
    }
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
