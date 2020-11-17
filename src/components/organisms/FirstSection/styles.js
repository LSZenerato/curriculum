import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  .image_style {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin: 0 10px;
  }

  // desktop 
  @media ${breakpoints.mobile} {
    flex-direction: row;
    width: 100%;

    .image_style {
      height: 200px;
      width: 200px;
      margin: 20px;
    }
  }
`;