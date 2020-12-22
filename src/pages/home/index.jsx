import { Header } from '../../components/organisms';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {
  const router = useRouter();

  const HeaderProps = {
    titleDescProps: {
      titleProps: {
        children: "Olá, bem vindo ao meu currículo!"
      },
      textProps: {
        children: "Site em React Js desenvolvido 100% por mim."
      }
    }
  }

  return <Container>
    <Header {...HeaderProps} />
  </Container>
}
