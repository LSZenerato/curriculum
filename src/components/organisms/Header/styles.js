import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10px 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
  background-image: url("https://images.unsplash.com/photo-1432821579285-1b649e5b1ce3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80");

  .title_style {
    float: right;
    max-width: 500px;
    font-size: 4rem;
    text-align: center;
    color: ${props => props.theme.primary};
    text-decoration: none;
    position: absolute;
  }

  // desktop 
  @media ${breakpoints.mobile} {
    flex-direction: row;
    padding: 50px 0;
    width: 100%;
    position: relative;

    .title_style {
      text-align: right;
      font-size: 5rem;
      right: 100px;
    }
  }
`;