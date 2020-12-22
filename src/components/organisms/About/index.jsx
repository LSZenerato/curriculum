import React from 'react';
import { AvatarDesc } from '../../molecules';
import { Container } from './styles';

function About({ AvatarDescProps }) {

    return <Container >
        <AvatarDesc {...AvatarDescProps} />
    </Container>;
}

export default About;