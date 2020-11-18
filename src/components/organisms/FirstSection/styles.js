import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  // desktop 
  @media ${breakpoints.mobile} {
    flex-direction: row-reverse;
    width: 100%;

    .image_style {
      height: 200px;
      width: 200px;
      margin: 20px;
    }
  }
`;