import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .ss_text_config {
        text-align: left;
    }
    .ss_divider_div_config {
        justify-content: flex-start;
    }

    .ts_text_config {
        text-align: right;
    }
    .ts_divider_div_config {
        justify-content: flex-end;
    }

    .fs_text_config {
        text-align: right;
        color: ${props => props.theme.primaryTxt};
    }
    .fs_divider_div_config {
        justify-content: flex-end;
        background-color: ${props => props.theme.primaryTxt};
    }
`;