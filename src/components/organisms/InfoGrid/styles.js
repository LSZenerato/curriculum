import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => 
    props.style === "primary" ? props.theme.primary
    : props.style === "secondary" ? props.theme.secondary
    : props.theme.tertiary};
  color: ${props => 
    props.style === "primary" ? props.theme.primaryTxt
    : props.style === "secondary" ? props.theme.secondaryTxt
    : props.theme.tertiaryTxt};
  align-items: center;
`;