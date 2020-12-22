import { OnePage } from '../../components/templates';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {
  const router = useRouter();

  const HeaderProps = {
    titleDescProps: {
      titleProps: {
        children: "Olá, bem vindo ao meu currículo!"
      },
      textProps: {
        children: "Site em React Js desenvolvido 100% por mim."
      }
    }
  }
  const AboutProps = {
    AvatarDescProps: {
      imageProps: {
        alt: 'minha foto',
        src: '/static/avatar.webp'
      },
      titleProps: {
        children: "Quem sou eu?"
      },
      textProps: {
        children: "Meu nome é Lucas Sacomani Zenerato, sou formado em Ciências da Computação e atuo como desenvolvedor front-end e back-end. Atualmente (2021) tenho aproximadamente 3 anos de experiência e sou apaixonado pelo que faço."
      }
    }
  }
  const MoreProps = {
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
        children: 'Quer saber mais sobre mim?'
      },
      textProps:{
        children: 'Dê uma olhada e fale comigo! Você pode me encontrar em:'
      },
      dividerDivProps: {
      }
    }
  }
  const TechnologiesProps = {
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
    <OnePage 
      HeaderProps={HeaderProps}
      AboutProps={AboutProps}
      MoreProps={MoreProps}
      TechnologiesProps={TechnologiesProps}
       />
  </Container>
}
