import { InfoGridLeft } from '../../components/organisms';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function MorePage() {
  const InfoGridLeftProps = {
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
        children: 'Quer saber mais sobre mim?'
      },
      textProps:{
        children: 'Dê uma olhada e fale comigo! Você pode me encontrar em:'
      },
      dividerDivProps: {
      }
    }
  }

  return <Container>
    <InfoGridLeft id="third_section"  {...InfoGridLeftProps} />
  </Container>
}
