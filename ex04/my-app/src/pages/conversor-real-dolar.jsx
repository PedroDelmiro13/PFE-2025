'use client'

import React, {useEffect, useState} from 'react';
import Navbar from "@/components/navbar";

const Moeda = () => {
    const [real, setReal] = useState(0);
    const [dolar, setDolar] = useState(0);
    const [cotacaoCompra, setCotacaoCompra] = useState(5.8419);
    const [cotacaoVenda, setCotacaoVenda] = useState(5.8425)
    const [tipoConversao, setTipoConversao] = useState('')
    const [valorInput, setValorInput] = useState(0);
    

    const converterRealParaDolar = (valor) => {
        if (valor >= 0) {
          setDolar(valor / cotacaoVenda);
        }
      };
      
      const converterDolarParaReal = (valor) => {
        if (valor >= 0) {
          setReal(valor * cotacaoCompra);
        }
      };
      
      useEffect(() => {
        if (tipoConversao === "realParaDolar") {
          converterRealParaDolar(valorInput);
        } else if (tipoConversao === "dolarParaReal") {
          converterDolarParaReal(valorInput);
        }
      }, [valorInput, tipoConversao]);
    return (
        <div className="min-h-screen bg-gray-100">
  <Navbar />
  <div className="flex items-center justify-center p-6">
    <div className="bg-white p-6 rounded-4xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-black mb-6">Conversor de Moeda</h1>
      <p className="text-xl text-black mb-4 text-center">Escolha a conversão desejada e insira o valor.</p>

      <div className="flex flex-col items-center space-y-4 mt-8">
        <label htmlFor="conversao" className="text-black text-lg font-semibold">
          Conversão:
        </label>
        <select
          id="conversao"
          className="px-4 py-2 border border-gray-300 rounded-xl text-black w-64"
          value={tipoConversao}
          onChange={(e) => setTipoConversao(e.target.value)}
        >
          <option value="">Selecione uma opção</option> 
          <option value="realParaDolar">Real para Dólar</option>
          <option value="dolarParaReal">Dólar para Real</option>
        </select>

        <label htmlFor="valor" className="text-black text-lg font-semibold">
          Valor:
        </label>
        <input
          type="number"
          id="valor"
          placeholder="Digite o valor"
          onChange={(e) => setValorInput(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl text-black w-64"
        />
        <p className="text-xl text-black font-semibold mt-4">
        Resultado: {tipoConversao === "realParaDolar" ? dolar : real}
        </p>
      </div>
    </div>
  </div>
</div>
    )
}
export default Moeda;