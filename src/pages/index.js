import { useRouter } from 'next/router';
import { MyPage } from '../components/templates';

const menuData = {
  text_1: "Olá, meu nome é ",
  text_2: "Lucas Sacomani Zenerato",
  text_3: "Analista de sistemas."
}

export default function Home() {
  const route = useRouter();

  const menuItems = [
    {
      title: "Quem sou eu?",
      onClick: () => route.push("/quemSouEu"),
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
    },
    {
      title: "Trabalhos realizados?",
      onClick: () => route.push("/quemSouEu"),
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
    },
    {
      title: "Tecnologias",
      onClick: () => route.push("/quemSouEu"),
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
    },
    {
      title: "Veja além",
      onClick: () => route.push("/quemSouEu"),
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
    },
  ];

  const menuProps = {
    menuItems,
    menuData
  }

  return <MyPage menuProps={menuProps} />
}
