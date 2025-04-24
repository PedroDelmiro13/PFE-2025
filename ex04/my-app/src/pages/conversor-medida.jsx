'use client'

import React, {useEffect, useState} from 'react';
import Navbar from "@/components/navbar";

const Medida = () => {
    const [metro, setMetro] = useState(0);
    const [pes, setPes] = useState(0);
    const [polegadas, setPolegadas] = useState(0);
    const [tipoConversaoM, setTipoConversaoM] = useState('');
    const [valorInputM, setValorInputM] = useState(0);

    const converterMetroParaPesEPolegadas = (valor) => {
        if (valor >= 0) {
            const totalDePes = valor * 3.28084;
            const parteInteira = Math.floor(totalDePes);
            const polegadasRestantes = (totalDePes - parteInteira) * 12;

            setPes(parteInteira);
            setPolegadas(polegadasRestantes);
        } else {
            console.log("Valor inválido");
        }
    };

    const converterPesEPolegadasParaMetro = () => {
        if (pes >= 0 && polegadas >= 0) {
            const metrosConvertidos = (pes * 0.3048) + (polegadas * 0.0254);
            setMetro(metrosConvertidos);
        } else {
            console.log("Valor inválido");
        }
    };

    useEffect(() => {
        if (tipoConversaoM === "metroParaPesEPolegadas") {
            converterMetroParaPesEPolegadas(valorInputM);
        }
    }, [valorInputM, tipoConversaoM]);

    useEffect(() => {
        if (tipoConversaoM === "pesEPolegadasParaMetro") {
            converterPesEPolegadasParaMetro();
        }
    }, [pes, polegadas, tipoConversaoM]);

    return (
        <div className="min-h-screen bg-gray-100">
    <Navbar />
    <div className="flex items-center justify-center p-6">
        <div className="bg-white p-6 rounded-4xl shadow-md">
            <h1 className="text-4xl font-bold text-center text-black mb-6">Conversor de Medidas</h1>
            <p className="text-xl text-black mb-4 text-center">Escolha a conversão desejada e insira o valor.</p>

            <div className="flex flex-col items-center space-y-4 mt-8">
                <label htmlFor="conversaoM" className="text-black text-lg font-semibold">
                    Conversão:
                </label>
                <select
                    id="conversaoM"
                    className="px-4 py-2 border border-gray-300 rounded-xl text-black w-64"
                    value={tipoConversaoM}
                    onChange={(e) => setTipoConversaoM(e.target.value)}
                >
                    <option value="">Selecione uma opção</option>
                    <option value="metroParaPesEPolegadas">Metros para Pés e Polegadas</option>
                    <option value="pesEPolegadasParaMetro">Pés e Polegadas para Metros</option>
                </select>

                
                    <div className='flex flex-col space-y-4'>
                        <label htmlFor="valorMetro" className="text-black text-lg font-semibold">
                            Metros:
                        </label>
                        <input
                            type="number"
                            id="valorMetro"
                            value={metro}
                            onChange={(e) => setValorInputM(parseFloat(e.target.value) || 0)}
                            className="px-4 py-2 border border-gray-300 rounded-xl text-black w-64"
                        />
                    </div>
                

                
                    <div className='flex flex-col space-y-4'>
                        <label htmlFor="valorPes" className="text-black text-lg font-semibold">
                            Pés:
                        </label>
                        <input
                            type="number"
                            id="valorPes"
                            value={pes}
                            onChange={(e) => setPes(parseFloat(e.target.value) || 0)}
                            className="px-4 py-2 border border-gray-300 rounded-xl text-black w-64"
                        />
                        <label htmlFor="valorPolegadas" className="text-black text-lg font-semibold">
                            Polegadas:
                        </label>
                        <input
                            type="number"
                            id="valorPolegadas"
                            value={polegadas}
                            onChange={(e) => setPolegadas(parseFloat(e.target.value) || 0)}
                            className="px-4 py-2 border border-gray-300 rounded-xl text-black w-64"
                        />
                    </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Medida;