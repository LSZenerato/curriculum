import React from 'react';
import { Container } from './styles';
import { Image, Button, Text } from '../../atoms';

function ButtonGridList({ list, buttonProps, imageProps, textProps }) {

    return (
        <Container>
          {
            list?.map((value, index) => {
              return <div className="item_div" key={index}>
                <Button {...buttonProps} className="btn_class" onClick={() => value.onClick()}>
                  <Image {...imageProps} className="img_class" src={value.src} alt={value.alt}/>
                </Button>
                {/* <Text {...textProps} className="h4_style" children={value.title} /> */}
              </div>
            })
          }
        </Container>
    );
}

export default ButtonGridList;