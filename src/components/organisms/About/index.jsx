import React from 'react';
import { AvatarDesc } from '../../molecules';
import { Container } from './styles';

function About({ AvatarDescProps, section, style }) {

    return <Container style={style} id={section} >
        <AvatarDesc {...AvatarDescProps} />
    </Container>;
}

export default About;