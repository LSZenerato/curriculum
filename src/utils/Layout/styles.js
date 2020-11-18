import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.secondary};
    /* background: linear-gradient(187deg, rgba(14,0,255,1) 55%, rgba(0,212,255,1) 55%, rgba(9,9,121,1) 55%); */
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
