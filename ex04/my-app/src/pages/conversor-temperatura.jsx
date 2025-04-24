'useClient'

import React, {useEffect, useState} from 'react';
import Navbar from "@/components/navbar";

const Temperatura = () => {
    const[celsius, setCelsius] = useState(0);
    const[kelvin, setKelvin] = useState(0);
    const[fahrenheint, setFahrenheint] = useState(0);
    const[tipoConversaoT, setTipoConversaoT] = useState('')
    const[valorInputT, setValorInputT] = useState(0);

    const converterCelsiusParaFahrenheint = (valor) =>{
        setFahrenheint((valor * 1.8) + 32)
    }
    const converterCelsiusParaKelvin= (valor) =>{
        setKelvin(valor + 273.15)
    }
    const converterFahrenheintParaCelsius = (valor)=>{
        setCelsius((valor -32)/1.8)
    }
    const converterFahrenheintParaKelvin = (valor) => {
        setKelvin((valor - 32) * 5/9 + 273.15)
    }
    const converterKelvinParaCelsius = (valor) =>{
        setCelsius(valor - 273.15)
    }
    const converterKelvinParaFahrenheint = (valor) =>{
        setFahrenheint((valor - 273.15) * 9/5 + 32)
    }
    useEffect(() => {
        //ternario pra corrigir o NaN quando tá vazio
        const valor = isNaN(valorInputT) ? 0 : valorInputT;
        
        if(tipoConversaoT === "celsiusParaFahrenheint"){
            converterCelsiusParaFahrenheint(valor);
        }else if(tipoConversaoT === "celsiusParaKelvin"){
            converterCelsiusParaKelvin(valor);
        }else if(tipoConversaoT === "fahrenheintParaCelsius"){
            converterFahrenheintParaCelsius(valor)
        }else if(tipoConversaoT === "fahrenheintParaKelvin"){
            converterFahrenheintParaKelvin(valor)
        }else if(tipoConversaoT === "kelvinParaCelsius"){
            converterKelvinParaCelsius(valor)
        }else if(tipoConversaoT === "kelvinParaFahrenheint"){
            converterKelvinParaFahrenheint(valor)
        }
    }, [valorInputT, tipoConversaoT]);
    
    const resultado = 
        tipoConversaoT === "celsiusParaFahrenheint" ? fahrenheint :
        tipoConversaoT === "celsiusParaKelvin" ? kelvin :
        tipoConversaoT === "fahrenheintParaCelsius" ? celsius :
        tipoConversaoT === "fahrenheintParaKelvin" ? kelvin :
        tipoConversaoT === "kelvinParaCelsius" ? celsius :
        tipoConversaoT === "kelvinParaFahrenheint" ? fahrenheint :
        0;

    return(
        <div className="min-h-screen bg-gray-100">
            <Navbar/>
            <div className="flex items-center justify-center p-6">
    <div className="bg-white p-6 rounded-4xl shadow-md">
      <h1 className="text-4xl font-bold text-center text-black mb-6">Conversor de Temperatura</h1>
      <p className="text-xl text-black mb-4 text-center">Escolha a conversão desejada e insira o valor.</p>
        <div className='flex flex-col items-center space-y-4 mt-8'>
        <label htmlFor="conversao" className="text-black text-lg font-semibold">
        Conversão:
        </label>
        <select
  id="conversao"
  className="px-4 py-2 border border-gray-300 rounded-xl text-black w-64"
  value={tipoConversaoT}
  onChange={(e) => setTipoConversaoT(e.target.value)}
>
  <option value="">Selecione uma opção</option>     
  <option value="celsiusParaFahrenheint">Celsius para Fahrenheint</option>
  <option value="celsiusParaKelvin">Celsius para Kelvin</option>
  <option value="fahrenheintParaCelsius">Fahrenheint para Celsius</option>
  <option value="fahrenheintParaKelvin">Fahrenheint para Kelvin</option>
  <option value="kelvinParaCelsius">Kelvin para Celsius</option>
  <option value="kelvinParaFahrenheint">Kelvin para Fahrenheint</option>
</select>
          <label htmlFor="valor" className="text-black text-lg font-semibold">
          Valor:
        </label>
        <input
          type="number"
          id="valor"
          placeholder="Digite o valor"
          onChange={(e) => setValorInputT(parseFloat(e.target.value)|| 0)}
          className="px-4 py-2 border border-gray-300 rounded-xl text-black w-64"
        />
        
    <p className="text-xl text-black font-semibold mt-4">
  Resultado: {isNaN(resultado) ? 0 : resultado}
    </p>
      </div>
    </div>
  </div>
</div>
    )
}
export default Temperatura;