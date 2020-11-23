import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    // desktop 
    @media ${breakpoints.mobile} {
        padding: 20px 50px;
        align-items: ${props => props.align === 'left' ? 'flex-start' : 'flex-end'};
        text-align: ${props => props.align === 'left' ? 'left' : 'right'};
    }
`;