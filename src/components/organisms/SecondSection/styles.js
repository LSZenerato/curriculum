import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;