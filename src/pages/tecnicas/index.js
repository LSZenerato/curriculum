import { Tecnicas } from '../../components/templates';
import { Container } from './styles';
import { FaArrowDown } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function TecnicasPage() {
  const router = useRouter();

  const SecondSectionProps = {
    titleProps: {
      children: 'Tecnicas utilizadas'
    },
    textProps:{
      children: 'Este site foi desenvolvido utilizando as tecnicas e tecnologias abaixo listadas'
    },
    buttonProps: {
      children: <FaArrowDown />,
      onClick: () => router.push('/quemSouEu'),
      className: 'next_button'
    },
    tecList: [
      {
        title: 'Next Js',
        logo: '/src/images/next_logo.png',
        onClick: () => alert('alow')
      },
      {
        title: 'React Js',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D03AQF1spmCFIqKCQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-FBHP_dgSn_GguhjP-ad3JIq3abQe3FhYfx6cVvztFY',
        onClick: () => alert('alow')
      },
      {
        title: 'Typescript',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D03AQF1spmCFIqKCQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-FBHP_dgSn_GguhjP-ad3JIq3abQe3FhYfx6cVvztFY',
        onClick: () => alert('alow')
      },
      {
        title: 'Javascript',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D03AQF1spmCFIqKCQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-FBHP_dgSn_GguhjP-ad3JIq3abQe3FhYfx6cVvztFY',
        onClick: () => alert('alow')
      },
      {
        title: 'Styled Components',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D03AQF1spmCFIqKCQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-FBHP_dgSn_GguhjP-ad3JIq3abQe3FhYfx6cVvztFY',
        onClick: () => alert('alow')
      },
      {
        title: 'Atomic Design',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D03AQF1spmCFIqKCQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-FBHP_dgSn_GguhjP-ad3JIq3abQe3FhYfx6cVvztFY',
        onClick: () => alert('alow')
      },
      {
        title: 'Mobile First',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D03AQF1spmCFIqKCQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-FBHP_dgSn_GguhjP-ad3JIq3abQe3FhYfx6cVvztFY',
        onClick: () => alert('alow')
      },
      {
        title: 'Vs Code',
        logo: 'https://media-exp1.licdn.com/dms/image/C4D03AQF1spmCFIqKCQ/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=-FBHP_dgSn_GguhjP-ad3JIq3abQe3FhYfx6cVvztFY',
        onClick: () => alert('alow')
      }
    ]
  }

  return <Container>
    <Tecnicas SecondSectionProps={SecondSectionProps} />
  </Container>
}
