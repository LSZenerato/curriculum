import React from 'react';

interface Props {
    list: Array<Object>
}

const Technologies: React.FC<Props> = ({ list }) => {
  return <div>
      {list.map(value => console.log(value))}
  </div>;
}

export default Technologies;