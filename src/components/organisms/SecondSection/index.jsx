import React from 'react';
import { Title, Text, Button } from '../../atoms';
import { ButtonGridList } from '../../molecules';
import { Container } from './styles';

function SecondSection({ props }) {
    const { titleProps, textProps, buttonProps, tecList } = props;

    return <Container>
        <div className="outside-div">
            <Title>{titleProps.children}</Title>
            <Text>{textProps.children}</Text>
        </div>
        <ButtonGridList menuItems={tecList} />
        <Button className='next_button' onClick={() => buttonProps.onClick()} >{buttonProps.children}</Button>
    </Container>;
}

export default SecondSection;