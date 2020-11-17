import { useEffect } from 'react';
import { Tecnicas } from '../../components/templates';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function TecnicasPage() {
  const router = useRouter();

  const SecondSectionProps = {
    titleProps: {
      children: 'Tecnicas utilizadas'
    },
    textProps:{
      children: 'Este site foi desenvolvido utilizando as tecnicas e tecnologias abaixo listadas'
    },
    tecList: [
      {
        title: 'Next Js',
        logo: '/public/images/next_logo.png',
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (success) => console.log('sucesso', success),
      (error) => console.log('error', error),
      {enableHighAccuracy: true}
    );
  }, []);

  return <Container>
    <Tecnicas SecondSectionProps={SecondSectionProps} />
  </Container>
}
