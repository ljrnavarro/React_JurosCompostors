import React, { useState, useEffect} from 'react'
import { calcParcelas } from '../helpers/CalculoJurosCompostos';
import Parcelas from './Parcelas';


export default function Form() {

    const [inputTotalInvestimentValue, setInputTotalInvestimentValue] = useState(1000);
    const [inputJurosValue, setInputJurosValue] = useState(0.5);
    const [inputMesesValue, setInputMesesValue] = useState(20);
    const [dataParcelas, setDataParcelas] = useState([]);

    const handleTotalInvestiment = (event) => {
        setInputTotalInvestimentValue(event.target.value);
    };

    const handleJuros = (event) => {
        setInputJurosValue(event.target.value);
    };

    const handleMeses = (event) => {
        setInputMesesValue(event.target.value);
    };

    useEffect(() => {
      setDataParcelas(calcParcelas(inputTotalInvestimentValue, inputJurosValue, inputMesesValue));
    }, [inputTotalInvestimentValue, inputJurosValue, inputMesesValue]); // Monitora alterações em allCountries e filter

    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s4">
                    <i className="material-icons prefix">attach_money</i>
                    <input id="inputTotalInvestiment" type="number" value={inputTotalInvestimentValue} step={100} onChange={handleTotalInvestiment} />
                    <label htmlFor="inputTotalInvestiment" className="active">Montante Inicial</label>
                </div>
                <div className="input-field col s4">
                    <i className="material-icons prefix">equalizer</i>
                    <input id="inputJuros" type="number" value={inputJurosValue} onChange={handleJuros} max={12} min={-12} />
                    <label htmlFor="inputJuros" className="active">Juros Mensal:</label>
                </div>
                <div className="input-field col s4">
                    <i className="material-icons prefix">date_range</i>
                    <input id="inputMeses" type="number" value={inputMesesValue} step={1} onChange={handleMeses} />
                    <label htmlFor="inputMeses" className="active">Meses:</label>
                </div>
            </div>
           <Parcelas data={dataParcelas} />
        </form>
    )
}


