import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${props => props.theme.secondary};
  align-items: center;

  @media ${breakpoints.mobile} {
    flex-direction: row-reverse;
  }
`;