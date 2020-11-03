import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-bottom: 50px;
    color: ${props => props.theme.tertiaryText};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;