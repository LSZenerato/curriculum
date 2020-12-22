import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.secondary};
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
