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

    .next_button {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        background: ${props => props.theme.primary};
        color: ${props => props.theme.primaryTxt};
        position: fixed;
        bottom: 5px;
        left: 50%;
        transform: translate(-50%, 0);
        opacity: .75;

        .icon {
            font-size: 1.5rem;
        }

        :hover {
            cursor: pointer;
            opacity: 1;
        }
    }
`;
