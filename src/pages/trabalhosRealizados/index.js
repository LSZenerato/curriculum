import { QuemSouEu } from '../../components/templates';
import { Container } from './styles';
import { FaArrowDown } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return <Container>
    <QuemSouEu />
    <button className="next_button" onClick={() => router.push('/quemSouEu')} > <FaArrowDown className="icon" /> </button>
  </Container>
}
