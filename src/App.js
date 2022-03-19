import React, { useState } from "react";

const App = () => {
  const [numero, setNumero] = useState(0)
  const aumentar = () => setNumero(numero+1)
  const decrementar = () => setNumero(numero-1)
  return(
    <div>
      <span>Numero: {numero}</span><br/>
      <button onClick={aumentar}>Mas</button>
      <button onClick={decrementar}>Menos</button>
    </div>
  )
}

export default App;
