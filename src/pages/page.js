import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { MyPage } from '../components/templates';
import { ThemeProvider } from 'styled-components';
import { themes } from '../utils';
import { useSelector, useDispatch } from 'react-redux';
import { changeThemeLight } from '../store/theme/actions';

const menuItems = [
  {
    title: "Quem sou eu?",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    title: "Trabalhos realizados?",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    title: "Tecnologias",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    title: "Veja além",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
];

const menuData = {
  text_1: "Olá, meu nome é ",
  text_2: "Lucas Sacomani Zenerato",
  text_3: "Analista de sistemas."
}

export default function Home() {
  const dispatch = useDispatch();
  const themeLightUp = useSelector(state => state.theme.light);
  const theme = themeLightUp ? themes.lightTheme : themes.darkTheme;

  const changeTheme = () => dispatch(changeThemeLight(!themeLightUp));

  const menuProps = {
    menuItems,
    menuData,
    changeTheme
  }

  return <ThemeProvider theme={theme}>
      <MyPage menuProps={menuProps} />
    </ThemeProvider>
}
