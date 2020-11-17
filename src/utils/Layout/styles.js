import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.primary};
    width: 100%;
    min-height: 100vh;
    padding: 5px 0px 75px 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .next_button {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        background: ${props => props.theme.quaternary};
        position: fixed;
        bottom: 5px;
        left: 50%;
        transform: translate(-50%, 0);
        opacity: .75;

        .icon {
            font-size: 1.5rem;
            color: ${props => props.theme.primary};
        }

        :hover {
            cursor: pointer;
            opacity: 1;
        }
    }
`;
