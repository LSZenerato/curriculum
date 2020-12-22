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

    .buttons_div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 5px;
    }

    .next_button {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        margin: 0 10px;
        background: ${props => props.theme.secondary};
        color: ${props => props.theme.secondaryTxt};

        .icon {
            font-size: 1.5rem;
        }

        :hover {
            cursor: pointer;
            opacity: 1;
        }
    }
`;
