import { QuemSouEu } from '../../components/templates';
import { FaArrowDown } from 'react-icons/fa';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export default function QuemSouEuPage() {
  const router = useRouter();

  const FirstSectionProps = {
    imgProps: {
      alt: 'minha foto',
      src: 'https://media-exp1.licdn.com/dms/image/C4D03AQF1spmCFIqKCQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-FBHP_dgSn_GguhjP-ad3JIq3abQe3FhYfx6cVvztFY'
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
