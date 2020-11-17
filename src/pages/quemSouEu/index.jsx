import { QuemSouEu } from '../../components/templates';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export default function QuemSouEuPage() {
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

  return <Container>
    <QuemSouEu FirstSectionProps={FirstSectionProps} />
  </Container>
}
