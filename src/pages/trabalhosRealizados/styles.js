import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .next_button {
    position: fixed;
    bottom: 10px;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background: ${props => props.theme.quaternary};

    .icon {
      font-size: 1.5rem;
      color: ${props => props.theme.primary};
    }

    :hover {
      cursor: pointer;
    }
  }
`;
