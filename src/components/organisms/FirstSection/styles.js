import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.primary};

    .grid {
        width: 100%;
        margin: 0;
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
        background-color: ${props => props.theme.secondary};
        color: white;
        margin: 10px;
    }

    /* este estilo aplica-se a partir de 900px em diante */
    @media ${breakpoints.tablet} {

        
    }
`;