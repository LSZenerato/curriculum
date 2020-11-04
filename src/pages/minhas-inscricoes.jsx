import React from 'react';

function MinhasInscricoes({ data }) {
    
    return <div>
        <h1>{data.title}</h1>
        <h1>{data.subtitle}</h1>
        <img src={` http://localhost:1337${data.img[0].url}`} alt=""/>
    </div>;
}

MinhasInscricoes.getInitialProps = async () => {
    const res = await fetch("http://localhost:1337/minhas-inscricoes");
    const data = await res.json();

    return {data}
}

export default MinhasInscricoes;