import { Home } from '../../components/templates';
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

  return <Container>
    <Home FirstSectionProps={FirstSectionProps} />
  </Container>
}
