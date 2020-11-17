import { useEffect } from 'react';
import { Contato } from '../../components/templates';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function ContatoPage() {
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

  return <Container>
    <Contato ThirdSectionProps={ThirdSectionProps} />
  </Container>
}
