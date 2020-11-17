import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.primary};
    width: 100%;
    min-height: 100vh;
    padding: 20px 0px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .next_button {
        height: 75px;
        width: 75px;
        border-radius: 50%;
        background: ${props => props.theme.quaternary};
        margin: 10px 0;
        /* position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, 0); */

        .icon {
            font-size: 1.5rem;
            color: ${props => props.theme.primary};
        }

        :hover {
            cursor: pointer;
        }
    }
`;
