import React from 'react';
import { Container } from './styles';
import { Image, Button, Text } from '../../atoms';

interface Props {
  menuItems: Array<IDataArray>
}

interface IDataArray { 
  title: string,
  onClick: () => void,
  logo: string,
  alt: string
}

const ButtonGridList: React.FC<Props> = ({ menuItems }) => {

    return (
        <Container>
          {
            menuItems.map((value, index) => {
              return <div className="item_div" key={index}>
                <Button 
                  aria-label={value.title}
                  onClick={() => value.onClick()}
                  key={value.title + index} >
                    <Image className="img_class" src={value.logo} alt={value.alt}/>
                </Button>
                <Text className="h4_style" >{value.title}</Text>
              </div>
            })
          }
        </Container>
    );
}

ButtonGridList.defaultProps = {
  menuItems: [
    {
      title: 'Item 1',
      logo: 'src',
      alt: 'alt',
      onClick: () => alert('sem função')
    },
    {
      title: 'Item 2',
      logo: 'src',
      alt: 'alt',
      onClick: () => alert('sem função')
    },
    {
      title: 'Item 3',
      logo: 'src',
      alt: 'alt',
      onClick: () => alert('sem função')
    },
  ]
}

export default ButtonGridList;