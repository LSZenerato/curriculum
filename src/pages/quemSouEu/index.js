import { QuemSouEu } from '../../components/templates';
import { Container } from './styles';
import { FaArrowDown } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Home() {
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
    },
    buttonProps: {
      children: <FaArrowDown />,
      onClick: () => router.push('/tecnicas'),
      className: 'next_button'
    }
  }

  return <Container>
    <QuemSouEu FirstSectionProps={FirstSectionProps} />
  </Container>
}
