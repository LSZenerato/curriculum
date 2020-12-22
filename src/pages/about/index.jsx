import { About } from '../../components/organisms';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function AboutPage() {
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

  return <Container>
    <About {...AboutProps} />
  </Container>
}
