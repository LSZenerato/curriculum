import React from 'react';
import { AvatarDesc } from '../../molecules';
import { Container } from './styles';

function About({ AvatarDescProps, section }) {

    return <Container id={section} >
        <AvatarDesc {...AvatarDescProps} />
    </Container>;
}

export default About;