import React from "react";
import '../hoja-de-estuilo/bonton.css';


function Boton({texto, esbotondeclic, manejarclic}) {
  return(
   
    <button className={ esbotondeclic ? "boton-de-clic" : "boton-de-reinicar" } onClick={manejarclic}>

      {texto}

    </button>
    
  )
}


export default Boton ;
