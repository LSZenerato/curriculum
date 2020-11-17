import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin: 0 10px;
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
    width: 90%;

    img {
      height: 200px;
      width: 200px;
      margin: 20px;
    }
    
    .outside-div {
      width: 70%;
      align-items: flex-end;
    }
  }
`;