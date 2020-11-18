import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Img = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin: 0 10px;

    // desktop 
    @media ${breakpoints.mobile} {
        height: 200px;
        width: 200px;
        margin: 20px;
    }
`
