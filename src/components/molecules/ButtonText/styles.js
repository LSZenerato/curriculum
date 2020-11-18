import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;

    .text_class {
        font-size: 1rem;
        margin: 10px;
    }

    .img_class {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    
     // desktop 
    @media ${breakpoints.mobile} {
        padding: 20px 50px;
    }
`;