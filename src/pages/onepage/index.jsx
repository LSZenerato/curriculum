import { OnePage } from '../../components/templates';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function OnePagePage() {
  const HeaderProps = {
    titleDescProps: {
      titleProps: {
        children: "Lucas Sacomanis Zenerato",
        className: "title_class"
      },
      textProps: {
        children: "Analista desenvolvedor de sistemas",
        className: "title_class"
      },
      dividerDivProps: {
        className: "div_class"
      }
    },
    imageProps: {
      alt: 'minha foto',
      src: '/static/avatar.webp'
    }
  }
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
  const InfoGridLeftProps = {
    buttonGridListProps: {
      buttonProps: {

      },
      imageProps: {

      },
      textProps: {

      },
      list: [
        {
          title: 'Linked In',
          src: '/static/linkedin.png',
          alt: 'Linked In',
          onClick: () => alert('alow')
        },
        {
          title: 'Github',
          src: '/static/github.png',
          alt: 'Github',
          onClick: () => alert('alow')
        },
        {
          title: 'Email',
          src: '/static/email.png',
          alt: 'Email',
          onClick: () => alert('alow')
        }
      ]
    },
    titleDescProps: {
      titleProps: {
        children: 'Contato'
      },
      textProps:{
        children: 'Você pode me encontrar em:'
      },
      dividerDivProps: {
      }
    }
  }


  return <Container>
    <OnePage 
      HeaderProps={HeaderProps} 
      InfoGridRightProps={InfoGridRightProps} 
      InfoGridLeftProps={InfoGridLeftProps} />
  </Container>
}
