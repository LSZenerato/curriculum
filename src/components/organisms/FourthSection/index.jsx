import React from 'react';
import { TitleDesc, ButtonText } from '../../molecules';
import { Container } from './styles';

function FourthSection({ props }) {
    const { titleDescProps, buttonTextProps } = props;

    return <Container>
        <TitleDesc title={titleDescProps.title} desc={titleDescProps.desc} textAlign={titleDescProps.textAlign} alignItems={titleDescProps.alignItems} />
        <ButtonText desc={buttonTextProps.desc} buttonProps={buttonTextProps.buttonProps} textAlign={buttonTextProps.textAlign} alignItems={buttonTextProps.alignItems} />
    </Container>;
}

export default FourthSection;