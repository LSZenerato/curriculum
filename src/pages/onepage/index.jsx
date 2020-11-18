import { OnePage } from '../../components/templates';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .ss_text_config {
        text-align: left;
    }
    .ss_divider_div_config {
        justify-content: flex-start;
    }

    .ts_text_config {
        text-align: right;
    }
    .ts_divider_div_config {
        justify-content: flex-end;
    }

    .fs_text_config {
        text-align: right;
        color: ${props => props.theme.primaryTxt};
    }
    .fs_divider_div_config {
        justify-content: flex-end;
        background-color: ${props => props.theme.primaryTxt};
    }
`;

export default function OnePagePage() {
  const FirstSectionProps = {
    titleDescProps: {
      titleProps: {
        children: "Lucas Sacomani Zenerato",
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
  const ThirdSectionProps = {
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
        children: 'Contato',
        className: "ts_text_config"
      },
      textProps:{
        children: 'Você pode me encontrar em:',
        className: "ts_text_config"
      },
      dividerDivProps: {
        className: "ts_divider_div_config"
      }
    }
  }
  const FourthSectionProps = {
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
        children: 'Contato',
        className: "fs_text_config"
      },
      textProps:{
        children: 'Você pode me encontrar em:',
        className: "fs_text_config"
      },
      dividerDivProps: {
        className: "fs_divider_div_config"
      }
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
