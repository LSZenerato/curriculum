import { useEffect } from 'react';
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
  const FirstSectionProps = {
    imgProps: {
      alt: 'minha foto',
      src: '/static/avatar.webp'
    },
    titleProps: {
      children: 'Lucas Sacomani Zenerato'
    },
    textProps:{
      children: 'Analista desenvolvedor de sistemas'
    }
  }
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
  const ThirdSectionProps = {
    titleProps: {
      children: 'Contato'
    },
    textProps:{
      children: 'Você pode me encontrar em:'
    },
    tecList: [
      {
        title: null,
        logo: '/static/linkedin.png',
        alt: 'Linked In',
        onClick: () => alert('alow')
      },
      {
        title: null,
        logo: '/static/github.png',
        alt: 'Github',
        onClick: () => alert('alow')
      },
      {
        title: null,
        logo: '/static/email.png',
        alt: 'Email',
        onClick: () => alert('alow')
      }
    ]
  }
  const FourthSectionProps = {
    titleDescProps: {
      title:"Quem sou eu?",
      desc:"Analista desenvolvedor de sistemas",
      textAlign:"center",
      alignItems:"center"
    },
    buttonTextProps: {
      desc:"Sou analista desenvolvedor de software e atuo com front-end e back-end. Desenvolvi esse projeto com o intúito de demonstrar parte de minhas habilidades e conhecimentos em Front-end.",
      buttonProps: {
        text:"Linkedin",
        src:"/static/linkedin.png",
        alt:"Linkedin"
      },
      textAlign:"center",
      alignItems:"center"
    }
  }

  return <Container>
    <OnePage 
      FirstSectionProps={FirstSectionProps} 
      SecondSectionProps={SecondSectionProps} 
      ThirdSectionProps={ThirdSectionProps} 
      FourthSectionProps={FourthSectionProps} />
  </Container>
}
