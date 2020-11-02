import React, { useState } from 'react';
import { Container } from './styles.js';

const List = [
  {
    "title": "Next JS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    "title": "Next JS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    "title": "Next JS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    "title": "Next JS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    "title": "Next JS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    "title": "Next JS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    "title": "React JS",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    "title": "Typescript",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    "title": "Typescript",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    "title": "Typescript",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  },
  {
    "title": "Progressive Web App",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
  }
];

interface Props {
  animation: string
}

const FirstSection: React.FC<Props> = ({ animation }) => {
  return (
    <div className={animation}>
      <Container>
        <h1>FIRST SECTION</h1>
        <div className="img_tech_div">
          {
            List.map(value => {
              return <div className="img_tech_round_div">
                <img className="img_tech" src={value.logo} alt={value.title} />
              </div>
            })
          }
        </div>
      </Container>
    </div>
  );
}

export default FirstSection;