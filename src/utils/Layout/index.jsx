import React from 'react';
import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../utils';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Transition from '../Transition/transition';
import { FaArrowDown } from 'react-icons/fa';

function Layout({children}) {
    const router = useRouter();
    const themeLightUp = useSelector(state => state.theme.light);
    const theme = !themeLightUp ? themes.darkTheme : themes.lightTheme;

    function changeRoute() {
        switch (router.pathname) {
            case '/quemSouEu':
                router.push('/tecnicas');
                break;
            case '/tecnicas':
                router.push('/quemSouEu');
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
            <button className="next_button" onClick={() => changeRoute()}><FaArrowDown /></button>
        </Container>
    </ThemeProvider>
}

export default Layout;