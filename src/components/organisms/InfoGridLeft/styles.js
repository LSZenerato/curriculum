import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.primaryTxt};

  @media ${breakpoints.mobile} {
    flex-direction: row;
    align-items: center;
  }
`;