import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
    width: 100%;
    padding: 50px 10px;
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: flex-end;

    // desktop 
    @media ${breakpoints.mobile} {
        padding: 50px 100px;
    }
    
    .title {
        min-width: 300px;
        max-width: 400px;
        font-size: 2.2rem;
        text-align: right;

        span {
            margin: 0;
        }
    }

    .sub_title {
        margin: 0;
        font-weight: 300;
        min-width: 300px;
        max-width: 400px;
        font-size: 1.5rem;
        text-align: right;
    }
`;
