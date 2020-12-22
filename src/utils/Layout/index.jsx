import React from 'react';
import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../utils';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Transition from '../Transition/transition';

function Layout({children}) {
    const router = useRouter();
    const themeLightUp = useSelector(state => state.theme.light);
    const theme = themes.lightTheme;

    return <ThemeProvider theme={theme}>
        <Container>
            <Transition location={router.pathname}>
                {children}
            </Transition>
        </Container>
    </ThemeProvider>
}

export default Layout;