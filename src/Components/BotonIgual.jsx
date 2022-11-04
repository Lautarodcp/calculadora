import React from "react";

const Igual = (props) =>{
    return (
        <button className="igual" onClick={props.botonHandler}>{props.nombre}</button>
    )
}

export default Igual;