import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { HomePage } from '../components/templates';
import { ThemeProvider } from 'styled-components';
import { themes } from '../utils';
import { useSelector } from 'react-redux';

export default function Home() {
  const themeLightUp = false;
  const theme = themeLightUp ? themes.lightTheme : themes.darkTheme;
  const teste = useSelector(state => state.courses);
  console.log(teste);

  return <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
}
