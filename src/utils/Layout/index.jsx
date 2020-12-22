import React from 'react';
import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../utils';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Transition from '../Transition/transition';
import { Button } from '../../components/atoms';

function Layout({children}) {
    const router = useRouter();
    const themeLightUp = useSelector(state => state.theme.light);
    const theme = themes.lightTheme;

    const nextRoute = () => {
        const pathname = router.pathname;

        switch (pathname) {
            case '/home': 
                router.push('/about');
                break;
            case '/about': 
                router.push('/more');
                break;
            case '/more': 
                router.push('/technologies');
                break;
            case '/technologies': 
                router.push('/home');
                break;
            default:
                break;
        }
    }

    const previousRoute = () => {
        const pathname = router.pathname;

        switch (pathname) {
            case '/technologies': 
                href
                break;
            case '/more': 
                router.push('/about');
                break;
            case '/about': 
                router.push('/home');
                break;
            case '/home': 
                router.push('/technologies');
                break;
            default:
                break;
        }
    }

    return <ThemeProvider theme={theme}>
        <Container>
            <Transition location={router.pathname}>
                {children}
            </Transition>
        </Container>
    </ThemeProvider>
}

export default Layout;