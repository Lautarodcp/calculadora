import React, { useState } from 'react';
import './App.css';
import Clear from './Components/Clear.jsx';
import Pantalla from './Components/Pantalla.jsx';
import Botones from "./Components/Botones.jsx";
import {evaluate} from "mathjs";
import Igual from './Components/BotonIgual';

function App() {
  const [numero, setNumero]= useState("")

  const botonHandler = (boton)=>{
    setNumero(numero + boton)
  }
  const clearHandler = ()=>{
    setNumero("");
  }

  const resultadoHandler = ()=>{
    setNumero(evaluate(numero))
  }
  return (
    <div className="App">
     <Pantalla numeros={numero} />
     <div className="lineaUno"> 
     <Botones esNumero={true} nombre="1" botonHandler={botonHandler} /> <Botones esNumero={true} nombre="2" botonHandler={botonHandler}/><Botones esNumero={true} nombre="3" botonHandler={botonHandler}/><Botones esNumero={false} nombre="+" botonHandler={botonHandler}/> 
     </div>
     <div className="lineaDos">
       <Botones esNumero={true} nombre="4" botonHandler={botonHandler}/><Botones esNumero={true} nombre="5" botonHandler={botonHandler}/><Botones esNumero={true} nombre="6" botonHandler={botonHandler}/><Botones esNumero={false} nombre="-" botonHandler={botonHandler}/> 
       </div>
     <div className="lineaTres">
       <Botones esNumero={true} nombre="7" botonHandler={botonHandler}/><Botones esNumero={true} nombre="8" botonHandler={botonHandler}/><Botones esNumero={true} nombre="9" botonHandler={botonHandler}/><Botones esNumero={false} nombre="*" botonHandler={botonHandler}/> 
       </div>
     <div className="lineaCuatro">
       <Botones esNumero={false} nombre="." botonHandler={botonHandler}/><Botones esNumero={true} nombre="0" botonHandler={botonHandler}/><Igual nombre="=" botonHandler={resultadoHandler} /><Botones esNumero={false} nombre="/" botonHandler={botonHandler}/> 
       </div>
     <Clear clearHandler={clearHandler}/>
    </div>
  );
}

export default App;
