import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => props.style === "primary" && `background-color: ${props.theme.primary}; color: ${props.theme.primaryTxt}; `};
  ${props => props.style === "secondary" && `background-color: ${props.theme.secondary}; color: ${props.theme.secondaryTxt};`};
  ${props => props.style === "tertiary" && `background-color: ${props.theme.tertiary}; color: ${props.theme.tertiaryTxt};`};
  @media ${breakpoints.mobile} {
    flex-direction: row;
    align-items: center;
    flex-direction: column;
  }
`;