import styled from 'styled-components';
import { breakpoints } from '../../../utils';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .outside-div {
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .grid-div {
    width: 100%;
    margin: 50px 0;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(100px, 100px));

    img {
      height: 75px;
      width: 75px;
      border-radius: 50%;
    }
  }

  .next_button {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background: ${props => props.theme.quaternary};
    margin: 10px 0;

    .icon {
      font-size: 1.5rem;
      color: ${props => props.theme.primary};
    }

    :hover {
      cursor: pointer;
    }
  }

  // desktop 
  @media ${breakpoints.mobile} {
    .outside-div {
      width: 70%;
      align-items: flex-end;
    }
  }
`;