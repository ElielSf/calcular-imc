import { useState } from "react";
import "./css/App.css";

export function calcularIMC(peso, altura) {
  altura = parseFloat(altura);
  peso = parseFloat(peso);

  console.log(peso + " " + altura);

  let imc = peso / (altura * altura);
  console.log(imc);

  imc = imc.toFixed(1);
  return imc;
}

export default function App() {
  const [dadosIMC, setDadosIMC] = useState({
    peso: 0,
    altura: 0,
    IMC: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosIMC((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dadosIMC.peso);
    setDadosIMC.IMC = calcularIMC(dadosIMC.peso, dadosIMC.altura);
    console.log(dadosIMC.IMC);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="peso">Peso (Kg):</label>
        <input
          type="number"
          name="peso"
          value={dadosIMC.peso}
          onChange={handleChange}
          required
        />
        <label htmlFor="altura">Altura (m)</label>
        <input
          type="number"
          name="altura"
          value={dadosIMC.altura}
          onChange={handleChange}
          required
        />
        <button type="Submit">Enviar</button>
      </form>
    </div>
  );
}
