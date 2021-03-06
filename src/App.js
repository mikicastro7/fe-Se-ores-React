import React from "react"

function App() {
  function frases() {
    const frases = [];
    let color;
    for(let i = 0; i < 100; i++){
      color = `rgb(${i + 150}, ${i - 50}, ${i - 50})`
      frases.push(<h1 style={{backgroundColor: color}} key={i}>Hola buenas {i + 1}</h1>);
    }
    return frases;
  }

  return (
    <React.Fragment>
      {frases()}
    </React.Fragment>
  );
}

export default App;
