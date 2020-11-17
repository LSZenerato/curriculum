import { useEffect } from 'react';
import { Sobre } from '../../components/templates';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function SobrePage() {
  
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
    <Sobre FourthSectionProps={FourthSectionProps} />
  </Container>
}
