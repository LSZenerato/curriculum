import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    margin: 20px;
  }

  .outside-div {
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
  }

  // desktop 
  @media ${breakpoints.mobile} {
    flex-direction: row;
    
    .outside-div {
      width: 70%;
      align-items: flex-end;
    }
  }
`;