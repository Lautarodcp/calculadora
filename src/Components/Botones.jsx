import React from "react";
import "../Components/Botones.css"

const Botones = (props) =>{
    return (
        <button 
        className={props.esNumero?"botonNumero":"botonOperacion"} 
        onClick={()=>(props.botonHandler(props.nombre))} >
            {props.nombre} 
        </button>
    )
}

export default Botones;