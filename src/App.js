import React from "react"

function App() {
  function frases() {
    const frases = [];
    let color;
    for(let i = 0; i < 100; i++){
      color = `rgb(${i + 150}, ${i - 50}, ${i - 50})`
      frases.push(<p style={{backgroundColor: color}} key={i}>Hola buenas {i + 1}</p>);
    }
    return frases;
  }

  return (
    <React.Fragment>
      <h1>Hola buenas Titulo</h1>
      {frases()}
    </React.Fragment>
  );
}

export default App;
