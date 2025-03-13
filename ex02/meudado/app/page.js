"use client"; 

import React, { useState } from 'react';
import Dado from './components/Dado';

const Page = () => {  
  const [valorDado, setValorDado] = useState(1);

  const gerarNumeroAleatorio = () => {
    const numero = Math.floor(Math.random() * 6) + 1;
    setValorDado(numero);
  }

  return(
    <div>
      <h1>Simulador de dados</h1>
      <Dado valor={valorDado} />
      <button onClick={gerarNumeroAleatorio}>Jogar dado</button>  
    </div>
  );
}

export default Page;