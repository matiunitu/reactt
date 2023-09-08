import react from "react"
import "../hoja-de-estuilo/contador.css"

function Contador({ numClics }) {
    return(
        <div className="contador">
            {numClics}     
        </div>
    );
    
}

export default Contador