import { InfoGridRight } from '../../components/organisms';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function TechnologiesPage() {
  const InfoGridRightProps = {
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
        children: 'Técnicas utilizadas'
      },
      textProps:{
        children: 'Este site foi desenvolvido utilizando as técnicas, tecnologias e conceitos abaixo listados'
      },
      dividerDivProps: {
      }
    }
  }

  return <Container>
    <InfoGridRight {...InfoGridRightProps} />
  </Container>
}
