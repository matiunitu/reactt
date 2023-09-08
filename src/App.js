import './App.css';
import Boton from './componentes/boton';
import freecodecamp from "./imagen/freecodecamp-logo.png";
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarclic = () =>{
    setNumClics(numClics+1);
  }

  const reiniciarContador = () =>{
    setNumClics(0)
  }

  return (
    <div className="app">
      <div>
    
        <div className="contenedor-img-logo">
          <img className='freecodecamp-logo' src={freecodecamp} alt='logo de freecodecamp'/>
        </div> 
        <div className='contenedor-pricipal'>
          <Contador numClics={numClics}/>
          
          <Boton  texto="clic "  esbotondeclic={true} manejarclic={manejarclic}/>
          
          <Boton texto=" Reinicar " esbotondeclic={false} manejarclic={reiniciarContador}/>

          

        </div>
      
      </div>
   </div>
  );
}

export default App;
